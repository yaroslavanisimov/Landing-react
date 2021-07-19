export default class FetchData {

    startUrl = 'https://api.spacexdata.com/';

    getResource = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Mistake ${res.status}`);
        }

        return await res.json();

    };

    gerRocket = async () => 
        await this.getResource(this.startUrl + 'rockets');

    getLaunches = async () => 
        await this.getResource(this.startUrl + 'launches/past');

    getCompany = async () => 
        await this.getResource(this.startUrl + 'company');

} 

