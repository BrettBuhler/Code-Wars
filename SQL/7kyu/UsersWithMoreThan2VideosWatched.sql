/*
In the online streaming platform users watch various videos and create playlists of their favorite content. The platform wants to identify engaged users who have explored and watched more than two different videos. This information will help platform to provide personalized recommendations and enhance the user experience.

You are working with PostgreSQL DB and being provided with a table named user_playlist containing the historical playlist data for users. The table has the following structure:

user_id: An integer representing the unique identifier of the user.
video_id: An integer representing the unique identifier of the video.
time: A timestamp representing the date and time when the user watched the video.
The table might have multiple entries for the same user watching the same video.

You got the following specification from the management:

Your query should return only the users who have watched more than two different videos.
The result should list the user_id and the video_id they have watched.
Duplicate combinations of user and video should be avoided in the result.
The result should be ordered by user_id in ascending order and by video_id also in ascending order
Having experience in Oracle, you wrote the solution:

select user_id, video_id
from (select user_id, video_id, count(distinct video_id) over (partition by user_id) as cnt
      from user_playlist
     ) t     
where cnt > 2
order by user_id, video_id;
But NANI...?!

It appeared that Postgres does not support DISTINCT for window functions.

You already ordered a pizza that is waiting for you to brighten up the end of a hard day's work but instead you have to rewrite the query while the pizza is cooling down because damn Postgres does not support such a basic feature.
*/

WITH DistinctVideos AS (
    SELECT DISTINCT user_id, video_id
    FROM user_playlist
)
SELECT user_id, video_id
FROM DistinctVideos
WHERE user_id IN (
    SELECT user_id
    FROM DistinctVideos
    GROUP BY user_id
    HAVING COUNT(*) > 2
)
ORDER BY  user_id, video_id;