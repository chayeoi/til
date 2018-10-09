# 파이어스토어 데이터 모델링 고급 기법

## Advanced Techniques in NoSQL

There are several [fundamental techniques](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/) at your disposal for managing complex NoSQL structures. Let’s talk briefly about each one of them.

### Duplication

Data duplication is a very common technique to eliminate the need to read multiple documents. Simple example - we might duplicate or embed a username on every tweet doc to avoid making secondary query to the user doc. Or we might duplicate 20 recent tweets on the user document to show on the user profile. This strategy results in faster reads, but slower writes. Think about it - we can read all data in a single document, but may need to update multiple documents when the embedded data changes.

### Aggregation

Data aggregation is the process of analyzing a collection of data, then saving the results on some other document. The simplest example would be saving a count of the total documents in a collection. Normally, Firestore aggregation is done server side via Cloud Functions.

### Composite Keys

A composite key is simply the combination of two or more unique document ids, for example `userXYZ_postABC`. This is especially useful for modeling relationships in denormalized structures because it can enforce a unique relationship between the two documents.

### Bucketing

[Bucketing](https://www.mongodb.com/blog/post/designing-mongodb-schemas-with-embedded) is a form of duplication/aggregation that breaks collections into single documents. Using Twitter as an example, let’s imagine we have a collection of tweets, but want to bucket a certain user’s tweets month-by-month. This would allow us to read tweets for a given month very efficiently, but the drawback is some additional bookkeeping to ensure all data stays in sync when updates occur on the source document (Twitter probably has good technical reasons for not allowing you to update tweets).

```
tweets/{tweetId}
  tweetData (any)

februaryTweets/{userId}
  userId
  tweets [
    { tweetData }
  ]
```

### Sharding

In many NoSQL databases, you must [shard](https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6) to scale. Sharding is just the process of breaking the database down into smaller chunks (horizontal partitioning) to increase performance.

In Firestore, sharding is handled automatically. The the only scenario where you may need to control sharding is when you consistently have many write operations occurring at intervals of less than 1s. Imagine the compute requirements of updating the like count on a new tweet from Selena Gomez.

### Pipelining (Unique Firebase Feature)

Another cool feature in the Firebase SDK is the ability to make read requests in a non-blocking manner called pipelining as explained by Frank van Puffelen. When you query Firestore, you don’t need to wait for response A to send request B. You can send all requests individually and Firebase will respond with data as soon as it becomes ready.

> Pipelining isn’t a data structuring technique, but it drives our decision-making process.

Let’s imagine you have an array of document ids. You can pipeline each request from a child component by looping over the ids, then performing a document read from the child component, i.e afs.doc('items/' + id). Because the requests are non-blocking, there’s no major performance hit for structuring your app this way.

```html
<parent-comp>
  <child-comp *ngFor="let id of documentIds">
    <!-- afs.doc('items/' + id) -->
  </child-comp>

</parent-comp>
```
