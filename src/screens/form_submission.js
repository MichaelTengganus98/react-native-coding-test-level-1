import * as React from 'react';
import { Text, View } from 'react-native';
import ContactForm from '../components/contact_form'

const FormSubmission = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ContactForm/>
        </View>
    );
}

export { FormSubmission };