export function isVariableAlias(value: any): value is VariableAlias {
  return (
    value &&
    typeof value === 'object' &&
    'type' in value &&
    value.type === 'VARIABLE_ALIAS'
  );
}
