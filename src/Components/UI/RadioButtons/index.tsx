import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

interface RadioButtonsGroupProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortValue: string;
}
const RadioButtonsGroup: React.FC<RadioButtonsGroupProps> = ({
  handleChange,
  sortValue,
}: RadioButtonsGroupProps) => {
  return (
    <FormControl component='fieldset' className='radio__buttons__container'>
      <FormLabel component='legend'>Sort By:</FormLabel>
      <RadioGroup
        aria-label='sort'
        name='sort'
        value={sortValue}
        onChange={handleChange}
      >
        <FormControlLabel value='city' control={<Radio />} label='City Name' />
        <FormControlLabel
          value='population'
          control={<Radio />}
          label='Population'
        />
        <FormControlLabel
          value='location'
          control={<Radio />}
          label='Location'
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;
