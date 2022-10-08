export const fetchDMV_Query = ssn_number => {
  return `
        query getPersonByName {
  list_PersonItems(filter: {ssn: {eq : ${ssn_number}}}) {
    _PersonItems {
      ssn
      first_name
      last_name
      city
      country
      dl
      dob
      phone_num
      photo
      state
      street_address
      zip_code
    }
  }
}`
}

export const fetchDOS_Query = ssn_number => {
  return ` query getPersonBySSN {
  list_PersonItems(filter: {ssn: {eq: ${ssn_number}}}) {
    _PersonItems {
      ssn
      photo
      passport_num
      passport_exp
      last_name
      first_name
      dob
      country
      city
      state
      street_address
      zip_code
    }
  }
}`
}

export const fetchSS_Query = ssn_number => {
  return `query get_Person {
  list_PersonItems(filter: {ssn: {eq: ${ssn_number}}}) {
    _PersonItems {
      city
      country
      dob
      first_name
      job
      last_name
      ssn
      state
      street_address
      zip_code
    }
  }
}
`
}
