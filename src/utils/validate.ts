
import * as Yup from 'yup'

export const validateSchemaLogin = Yup.object({
  email: Yup.string()
    .email('Dirección de correo electrónico no válida')
    .required('El correo electrónico es obligatorio'),
  
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(20, 'La contraseña no puede tener más de 20 caracteres')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,20}$/,
      'La contraseña debe tener al menos una letra y un número'
    ),
});

export const validateSchemaRegister = Yup.object({
    name: Yup.string()
      .required('El nombre es obligatorio')
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(50, 'El nombre no puede tener más de 50 caracteres'),
    
    email: Yup.string()
      .email('El correo electrónico no es válido')
      .required('El correo electrónico es obligatorio'),
    
    address: Yup.string()
      .required('La dirección es obligatoria')
      .min(10, 'La dirección debe tener al menos 10 caracteres')
      .max(100, 'La dirección no puede tener más de 100 caracteres'),
    
    password: Yup.string()
      .required('La contraseña es obligatoria')
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(20, 'La contraseña no puede tener más de 20 caracteres')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,20}$/,
        'La contraseña debe tener al menos una letra y un número'
      ),
    
    phone: Yup.string()
      .required('El teléfono es obligatorio')
      .matches(
        /^[0-9]{10}$/,
        'El teléfono debe tener 10 dígitos numéricos'
      ),
  })