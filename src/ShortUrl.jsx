import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'aws-amplify/api';

export default function ShortUrl() {
    const { short_url } = useParams();

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const restOperation = get({
                    apiName: 'apiurlshortener',
                    path: '/',
                    options: {
                        queryParams: {
                            id: short_url
                        }
                    }
                })
                const res = await restOperation.response;
                const body = await res.body.json();
                console.log(body);
                // redirect
                location.replace(body.url);
            } catch(error) {
                console.log("Error: ", error)
            }
        }

        fetchUrl();
    }, [short_url]);
  return (
    <div>Redirecting...</div>
  )
}
