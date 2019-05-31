export function setBrowserVariable(name, value)
{
    if(window.localStorage){
        localStorage.setItem(name, value);
    }

}

export function getBrowserVariable(name)
{
    return localStorage.getItem(name);
}