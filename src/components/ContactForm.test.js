import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from "./ContactForm";


test('that ContactForm renders', () => {
    render(<ContactForm />)
});

