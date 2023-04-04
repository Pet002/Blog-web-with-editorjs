import axios from "axios";

const URL = "http://localhost:8080";

async function CreateBlog(data) {
    const res = await axios
        .post(`${URL}/blog/create`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            // console.log(response);
            return response;
        })
        .catch((err) => {
            return err;
        });

    // console.log(res);
    return res;
}

async function GetBlog() {
    const res = await axios.get(`${URL}/blog`, {
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        console.log(res)
        return res
    });
    return res;
}

export { CreateBlog, GetBlog };
