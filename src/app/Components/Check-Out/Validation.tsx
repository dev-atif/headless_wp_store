export interface CheckoutFormValues {
  FirstName: string;
  LastName: string;
  Address: string;
  City: string;
  State: string;
  PostCode: string;
  Country: string;
  Email: string;
  Number: string;
  PaymentMethod: string;
  CardHolderName?: string; // Optional if payment method is COD
  CardNumber?: string; // Optional if payment method is COD
  ExpirationDate?: string; // Optional if payment method is COD
  CVC?: string; // Optional if payment method is COD
}


const validateCheckoutForm = (values: CheckoutFormValues) => {
  const errors: Partial<Record<keyof CheckoutFormValues, string>> = {}; // Use Partial for optional fields

  // Common validations
  if (!values.FirstName) errors.FirstName = "First Name is required";
  if (!values.LastName) errors.LastName = "Last Name is required";
  if (!values.Address) errors.Address = "Address is required";
  if (!values.City) errors.City = "City is required";
  if (!values.State) errors.State = "State is required";
  if (!values.PostCode) errors.PostCode = "Post Code is required";
  if (!values.Country) errors.Country = "Country is required";

  if (!values.Email) {
    errors.Email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
    errors.Email = "Invalid email format";
  }

  if (!values.Number) errors.Number = "Phone number is required";

  // Payment method specific validations
  if (!values.PaymentMethod) {
    errors.PaymentMethod = "Payment Method is required";
  } else if (values.PaymentMethod !== "COD") {
    if (!values.CardHolderName)
      errors.CardHolderName = "Card Holder Name is required";

    if (!values.CardNumber) {
      errors.CardNumber = "Card Number is required";
    } else if (!/^\d{16}$/.test(values.CardNumber)) {
      errors.CardNumber = "Card Number must be 16 digits";
    }

    if (!values.ExpirationDate)
      errors.ExpirationDate = "Expiration Date is required";

    if (!values.CVC) {
      errors.CVC = "CVC is required";
    } else if (!/^\d{3}$/.test(values.CVC)) {
      errors.CVC = "CVC must be 3 digits";
    }
  }

  return errors;
};

export default validateCheckoutForm;
