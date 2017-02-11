import {Pipe, PipeTransform} from '@angular/core';
import * as ts from 'typescript';
import {Parameter} from '../syntax-parser';

enum translator {
  any = ts.SyntaxKind.AnyKeyword,
  boolean = ts.SyntaxKind.BooleanKeyword,
  number = ts.SyntaxKind.NumberKeyword,
  string = ts.SyntaxKind.StringKeyword,
  // unknown = ts.SyntaxKind.TypeReference,
  // unknown = ts.SyntaxKind.TypeLiteral,
  Array = ts.SyntaxKind.ArrayType
}

@Pipe({name: 'npParameterKind'})
export class ParameterKindPipe implements PipeTransform {
  transform(parameter: Parameter) {
    return translator[parameter.kind] ? translator[parameter.kind] : '[unknown]';
  }
}
