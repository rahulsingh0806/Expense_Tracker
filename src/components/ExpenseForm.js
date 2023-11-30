// src/components/ExpenseForm.js
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAddExpense }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) return;

        const newExpense = {
            id: new Date().getTime().toString(),
            description,
            amount: parseFloat(amount),
        };

        onAddExpense(newExpense);

        // Reset the form
        setDescription('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <table className='form-container-table'>
                <tbody>
                    <tr>
                        <td className='title'>
                            <label htmlFor='desc' className='form-container-label' >
                                Description:
                            </label>
                        </td>
                        <td className='data'>
                            <input
                                className='form-container-input'
                                name='desc'
                                type="paragraph"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>
                            <label htmlFor='amount' className='form-container-label'>
                                Amount:
                            </label>
                        </td>
                        <td className='data'>
                            <input
                                className='form-container-input'
                                name='amount'
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <button type="submit" className='form-container-button'>Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
