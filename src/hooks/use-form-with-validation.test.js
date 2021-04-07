import {renderHook} from '@testing-library/react-hooks';
import useFormWithValidation from 'src/hooks/use-form-with-validation';

describe(`useFormWithValidation custom hook works correctly`, () => {
  it(`useFormWithValidation hook returns correct instances`, () => {
    const {result} = renderHook(() => useFormWithValidation());

    const {current} = result;
    const {values, handleChange, errors, isFormValid, resetForm} = current;

    expect(values).toBeInstanceOf(Object);
    expect(handleChange).toBeInstanceOf(Function);
    expect(errors).toBeInstanceOf(Object);
    expect(isFormValid).toBe(false);
    expect(resetForm).toBeInstanceOf(Function);
  });

  it.todo(`useFormWith validation changes values state correctly`);
});
