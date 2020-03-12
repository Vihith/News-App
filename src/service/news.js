import { articles_url, country_code  } from '../config/rest_api'
import { API_KEY } from 'react-native-dotenv'

// ApiClient.init(API_KEY)

export async function getArticles(category='general'){
    try{
        
        let article = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
            method : 'GET',
            headers: {
                'X-API-KEY' : API_KEY
            }
        })

        let response = await article.json()
        console.log("hahahaha", response)
        return response.articles
    } catch(error){
        console.log("API error", error)
        
    }
} 