import { createContext, useReducer} from "react";

type Field = {
  value: string;
  hasError: boolean;
  errorMessage: string;
};

const initialState = {
  value: "",
  hasError: false,
  errorMessage: "",
};

type FormContextData = {
  nameField: Field;
  dispatchNameField: React.Dispatch<any>;
  emailField: Field;
  dispatchEmailField: React.Dispatch<any>;
  clearForm: () => void;
};

export const FormContext = createContext({
  nameField: initialState,
  dispatchNameField: () => {},
  emailField: initialState,
  dispatchEmailField: () => {},
  clearForm: () => {},
} as FormContextData);

export const ACTIONS = {
  SET_VALUE: "SET_VALUE",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
};

function handleFormState(state: Field, action: any) {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return {
        ...state,
        value: action.value,
        hasError: false,
        errorMessage: "",
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage,
      };
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: "",
        hasError: false,
      };
    default:
      return state;
  }
}

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [nameField, dispatchNameField] = useReducer(
    handleFormState,
    initialState
  );
  const [emailField, dispatchEmailField] = useReducer(
    handleFormState,
    initialState
  );


  function clearForm() {
    dispatchNameField({ type: ACTIONS.SET_VALUE, value: "" });
    dispatchEmailField({ type: ACTIONS.SET_VALUE, value: "" });
  }

  const value = {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    clearForm,
  };

  return (
    <FormContext.Provider value={{ ...value }}>{children}</FormContext.Provider>
  );
};
