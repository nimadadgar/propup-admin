
export const AutoValidation=(validations,values)=>{
    let errors = {};

    validations.forEach(item=>{
      const formValue=values[item.key];

      item.rules.forEach(r=>{
        ////////Each rule should be validae
        if (r.rule=="Required")
        {
          if (!values[item.key]) 
          {
          errors[item.key]=r.errorMessage;
          }
        }

        if (r.rule=="RegularExpression")
        {
          var regex =new RegExp(r.pattern);
       if (!regex.test(values[item.key]))
            errors[item.key]=r.errorMessage;
          
        }


      })
    })

  return errors;
  };

  export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  