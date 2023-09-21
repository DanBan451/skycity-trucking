// import Joi from "joi-browser";

// const Validation = () => {
//   const validateProperty = (name, value) => {
//     let obj = { [name]: value };
//     let subSchema = { [name]: schema[name] };

//     let { error } = Joi.validate(obj, subSchema);

//     return error ? error.details[0].message : null;
//   };
//   const validate = () => {
//     const errors = {};
//     const options = {
//       abortEarly: false,
//     };
//     let { error: result } = Joi.validate(account, schema, options);

//     console.log(result.details[0].message);
//     result.details.forEach((element) => {
//       errors[element.context.key] = element.message;
//     });

//     return Object.keys(errors).length ? errors : null;
//   };
// };

// export default Validation;
