const notifyByEmail =(email) =>{
  console.log(`Email sent to: ${email}`);
}

const notifyByText =(phone_number) =>{
  console.log(`Text sent to: ${phone_number}`);
}

const notify = (string, notifyByFunction) =>{
  console.log(notifyByFunction(string));
}

notify('hello@makers.tech.test',notifyByEmail);
notify('+10000000000',notifyByText);