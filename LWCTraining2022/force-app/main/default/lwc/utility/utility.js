import {ShowToastEvent} from 'lightning/platformShowToastEvent';

let showToast = (component, toastTitle, toastMessage, toastVariant, toastMode)=>{
    let toastEvent = new ShowToastEvent(
        {
            title: toastTitle,
            message: toastMessage,
            variant: toastVariant,
            mode: toastMode
        }
    );

    component.dispatchEvent(toastEvent);
};

export{
    showToast
}