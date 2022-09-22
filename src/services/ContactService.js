
import axios from 'axios'; 


export class ContactService {
    static serverURL = `http://localhost:9000`; 


    static getGroups() {
        let dataURL = `${this.serverURL}/group`; 
        return axios.get(dataURL); 
    }

    static getGroup(contact) {
        let groupId = contact.groupId; 
        let dataURL = `${this.serverURL}/group/${groupId}`; 
        return axios.get(dataURL); 
    }

    static getAllContacts() {
        let dataURL = `${this.serverURL}/contacts`; 
        return axios.get(dataURL);
        
    }

    static deleteContact(contactId) {
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.delete(dataURL)
        

    }


    static getContact(contactId) {
        let dataURL = `${this.serverURL}/contacts/${contactId}`; 
        return axios.get(dataURL)
    }

    static createContact(contact) {
        let dataURL = `${this.serverURL}/contacts`; 
        return axios.post(dataURL, contact)
    }

    static editContact(contact) {
        let dataURL = `${this.serverURL}/contacts`; 
        return axios.put(dataURL, contact); 

    }
}
















