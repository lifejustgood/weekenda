import React from "react";
import { OptionsType } from "../../datatypes"
import { API_URL_GetAvailableCountries } from '../../appsettings';



export function GetCountryOptions() {
    const [availableCountries, setAvailableCountries] = React.useState<OptionsType | undefined>();
    
    React.useEffect(()=> {
        fetch(API_URL_GetAvailableCountries)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result=', result);
                    setAvailableCountries(result);
                    console.log('availableCountries=', availableCountries);
                 
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    return availableCountries;
}

