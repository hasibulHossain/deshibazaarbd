import React from 'react';
import Select from 'react-select';

export default ({ onChange, options, value, id, name, isDisabled = false }) => {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "" ;
    };

    return (
        <Select
            isDisabled={isDisabled}
            name={name}
            id={id}
            value={defaultValue(options, value)}
            onChange={value => {
                onChange(value)
            }} 
            options={options}
        />
    )
}