import axios from "axios";

const googleScholarAPI = {
    getGoogleScholar: function (){
        return axios.get("https://www.googleapis.com/auth/books");
    }
}

export default googleScholarAPI;