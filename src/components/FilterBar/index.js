import React, { useContext, useEffect, useState } from "react"
import { UsersContext } from "context/UsersContext"
import { 
  FormControl,
  InputLabel, 
  makeStyles, 
  MenuItem, 
  Select 
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  }
}))

const countries = {
  'All': 'All', 
  'AU': 'Australia', 
  'BR': 'Brazil',
  'CA': 'Canada',
  'CH': 'Switzerland', 
  'DE': 'Germany',
  'DK': 'Denmark', 
  'ES': 'Spain', 
  'FI': 'Finland',
  'FR': 'France', 
  'GB': 'United Kingdom', 
  'IE': 'Ireland',
  'IR': 'Iran', 
  'NL': 'Netherlands',
  'NO': 'Norway', 
  'NZ': 'New Zealand', 
  'TR': 'Turkey', 
  'US': 'United States'
}

export const FilterBar = () => {
  const [filter, setFilter] = useState({ nat: '', gender: '' })
  const { fetchUsers } = useContext(UsersContext)
  const classes = useStyles()

  useEffect(() => {
    if (filter.nat || filter.gender) {
      const nat = filter.nat === 'All' ? '' : filter.nat
      const gender = filter.gender === 'All' ? '' : filter.gender
      const filterReq = { nat, gender }
      fetchUsers(filterReq)
    }
  }, [filter, fetchUsers])

  const handleChange = ({ target }) => {
    const { value, name } = target

    setFilter({ ...filter, [name]: value })
  }

  return (
    <div>
      <FormControl className={classes.formControl} variant="outlined">
      <InputLabel id="country">Country</InputLabel>
        <Select
          labelId="country"
          label="country"
          name="nat" 
          value={filter.nat} 
          onChange={handleChange}
        >
          {Object.keys(countries).map((country) => (
            <MenuItem key={country} value={country}>
              {countries[country]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          label="gender"
          name="gender"
          value={filter.gender}
          onChange={handleChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
