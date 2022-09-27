"""
Welcome to the world of the National Football League!

In the NFL the Triple Crown is given when a receiver has the most receiving yards, the most receiving touchdowns and the most receptions in a single season.

This year Cooper Kupp managed to get it, however it is quite rare because the last one was in 2005 by Steve Smith.

Now you will receive a dictionary with the following keys (will always contain each):

Cooper Kupp

Justin Jefferson

Davante Adams

Each key will have another dictionary as their values with the following keys:

Receiving yards (value between 1500-2000)

Receiving touchdowns (value between 10-20)

Receptions (value between 90-120)

If one receiver has the most in each category you have to return his name. If there is no receiver with the most values in all categories you should return 'None of them'.
"""
# MY SOLUTION
def triple_crown(a):
    players = []
    for x in a:
        players.append([x,a[x]])
    if players[0][1]['Receiving yards'] > players[1][1]['Receiving yards'] and players[0][1]['Receiving yards'] > players[2][1]['Receiving yards']:
        if players[0][1]['Receiving touchdowns'] > players[1][1]['Receiving touchdowns'] and players[0][1]['Receiving touchdowns'] > players[2][1]['Receiving touchdowns']:
            if players [0][1]['Receptions'] > players[1][1]['Receptions'] and players [0][1]['Receptions'] > players[2][1]['Receptions']:
                return players[0][0]
    if players[1][1]['Receiving yards'] > players[0][1]['Receiving yards'] and players[1][1]['Receiving yards'] > players[2][1]['Receiving yards']:
        if players[1][1]['Receiving touchdowns'] > players[0][1]['Receiving touchdowns'] and players[1][1]['Receiving touchdowns'] > players[2][1]['Receiving touchdowns']:
            if players [1][1]['Receptions'] > players[0][1]['Receptions'] and players [1][1]['Receptions'] > players[2][1]['Receptions']:
                return players[1][0]
    if players[2][1]['Receiving yards'] > players[0][1]['Receiving yards'] and players[2][1]['Receiving yards'] > players[1][1]['Receiving yards']:
        if players[2][1]['Receiving touchdowns'] > players[0][1]['Receiving touchdowns'] and players[2][1]['Receiving touchdowns'] > players[1][1]['Receiving touchdowns']:
            if players [2][1]['Receptions'] > players[0][1]['Receptions'] and players [2][1]['Receptions'] > players[1][1]['Receptions']:
                return players[2][0]
        

    return 'None of them'

