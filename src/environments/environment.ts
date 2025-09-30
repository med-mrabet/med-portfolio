declare const process: any;

export const environment = {
    production: false,
    gtmId: 'GTM-KVLRVX5R',
    apiUrl: 'http://localhost:3000',
    recaptcha: {
        siteKey: '6LeNlpwqAAAAAIMpN3UDHUcGAjsRXst_RRCpPlRW' // Replace with your reCAPTCHA site key
    },
    emailJs: {
      publicKey: process.env['EMAILJS_PUBLIC_KEY'] ,
      serviceId: process.env['EMAILJS_SERVICE_ID'] ,
      templateId: process.env['EMAILJS_TEMPLATE_ID'] 
    }
};
