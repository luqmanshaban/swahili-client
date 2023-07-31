
export function DeleteToken() {
    setTimeout(() => {
        localStorage.removeItem('token');
    },600000)
}

DeleteToken()