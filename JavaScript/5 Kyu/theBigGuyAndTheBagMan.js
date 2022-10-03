/*
This Kata will consider the situation of a fictional politician, "The Big Guy", or TBG.

TBG's close relative, "The Bagman", travels around the world collecting bribes for TBG. Because of increased scrutiny, they can no longer use government aircraft to collect the bribes so they have to pay for private travel. Any travel costs come out of the total rake, so TBG wants to keep travel costs at a minimum.
Neither TBG nor The Bagman is very good at math, so TBG has hired you to write an algorithm to determine the cheapest route for The Bagman to take so that he can collect all the bribes. The route will always start and end in TBG's home city, Notgnihsaw. Your function should return a list of the optimal path, in order, starting with the first city The Bagman travels to and ending with Notgnihsaw. You will be provided two lists as inputs. The first will be the list of cities that The Bagman must travel to. The second will be a 2D list consisting of travel costs from the corresponding city in List 1 to the various other cities in the order they are given.

For example, given:
cities = ['Notgnihsaw', 'Berlin', 'Helsinki']
costs = [[0, 800, 1500], [900, 0, 350], [1200, 650, 0]]
From Notgnihsaw to Notgnihsaw costs 0, Notgnihsaw to Berlin costs 800, Notgnihsaw to Helsinki costs 1500. From Berlin to Notgnihsaw costs 900, Berlin to Berlin costs 0, Berlin to Helsinki costs 350, etc.

Note that the cost of travelling from A to B is not necessarily the same as travelling B to A.
Business is good, so there will always be at least 3 cities in the list (including Notgnihsaw).
If there are multiple routes tied for the cheapest, any of them can be returned as the correct answer.

Example:
cities = ['Notgnihsaw', 'Berlin', 'Helsinki']
costs = [[0, 800, 1500], [900, 0, 350], [1200, 650, 0]]
returns ['Berlin', 'Helsinki', 'Notgnihsaw']

cities = ['Aleppo', 'Shenyang', 'Notgnihsaw', 'Vienna', 'Buenos Aires']
costs = [[0, 1800, 1250, 1500, 2450], [1400, 0, 1900, 1150, 2000], [1300, 1200, 0, 900, 1450],
[3000, 1950, 800, 0, 1700], [2800, 2400, 1650, 2250, 0]]
returns ['Shenyang', 'Aleppo', 'Vienna', 'Buenos Aires', 'Notgnihsaw']

Good luck, The Big Guy is counting on you!
*/
// MY SOLUTION

const bestRoute = (cities, cost) => {
    let cityIndex = cities.indexOf('Notgnihsaw')
    let copyCities
    copyCities = cities.filter(x=>x != 'Notgnihsaw')
    let helperArr = []
    const permute = (arr) => {
      if(arr.length == copyCities.length){
        return helperArr.push(arr)
      }
      for (let i of copyCities){
        if(!arr.includes(i)){
          permute([...arr, i])
        }
      }
    }
    permute([])
    let costIndex = helperArr.map(route=>{
      let sum = 0
      sum += cost[cityIndex][cities.indexOf(route[0])]
      for (let i = 0; i < route.length - 1; i++){
        sum += cost[cities.indexOf(route[i])][cities.indexOf(route[i+1])]
      }
      sum += cost[cities.indexOf(route[route.length-1])][cityIndex]
      return [sum, route]
    })
    return costIndex.sort((a,b)=>{
      return a[0] > b[0]?1:-1
    })[0][1].concat('Notgnihsaw')
  }