// EX02: Criar um novo array com as empresas que foram fundadas depois de 1975 e que tenham mais de 2 milhões de dólares
// de valor de mercado, de acordo com o array abaixo:
const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Marck Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]

const newCompanies = companies.filter(company => {
    if (company.foundedOn > 1975 && company.marketValue > 200) {
        return true
    } else {
        return false
    }
})
console.log(newCompanies)