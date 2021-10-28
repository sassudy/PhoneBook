const fs = require ('fs');
const path = require('path');

const pathToFile = path.join(path.dirname(require.main.filename), 'data', 'contacts.json');

module.exports = class Contact{

    constructor(contact){
        this.contact = contact;
    }

    saveContact(){
        fs.readFile(pathToFile,(error, fileContent) =>{
        let contacts = [];
        if (!error) {
         contacts = JSON.parse(fileContent);
        } else{
            console.log(error);
        };

        contacts.push(this);

        fs.writeFile(pathToFile, JSON.stringify(contacts), (error) => {
            console.log('Error', error);
        });
        });
    }
        static fetchAllContacts(callBack){
            fs.readFile(pathToFile,(error, fileContent) => {
                if (error) {
                    callBack([]);
                };
                callBack(JSON.parse(fileContent));
            })

        }
};




