# How to connect local and remote repos?
 (will be demonstrated on the example of creating "Katas" folder locally and on the GitHub )
 
## locally (on your laptop)
```bash
$ mkdir katas
$ cd katas
$ git init # initialize Git repo
```
![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4f3a915b08defb52d1ebfaaf2ec599a2.png)

Now if you want to see if this repo is connected to any remote repo (if it was cloned from GitHub), you would run:

```bash
$ git remote -v
```

Since this repo (folder) is not the clone of any repo, you won't get any response:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_27fba82de8bae3b8a676c7ffd6981b81.png)

Let's change this by adding the **remote origin** to it, which comes in the next step.

## remotely (on GitHub)
1. create a new repository - click on the **+** sign next to your image in the upper right corner:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4f1d41dbc7da7dee984b7dc0f8425555.png)

<br><br>
2. you will be prompted to the following page:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8c1bfa7acf9a35031179b2210589a033.png)

3. after clicking on **Create repository**, you will see the page with some *instructions*. Pay attention to the two marked with red:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_6f4df0ef793f6262751367bd17e232a8.png)

4. copy the first line and paste it on your terminal (you have navigate to the *katas* repo)

5. check if there was a *successful* connection by typing:

```bash
$ git remote -v
```

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1b64ba0bfaa58a3054916e78e1ee85a3.png)

6. perfect! Now we can add some content to our *local* repo and *push* it to the remote repo on GitHub

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d5a55e34f2ed05e35ff64f2a9f26d61a.png)


7. now we can check our remote repo and we will find the *kata1.js* file there as well:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_78720188bf1d663b211afc31c50a376a.png)


8. at this point, any change we make to our *local, katas* repo, can be pushed to the *remote, katas-collection* repo by typing this:

```bash
$ git add .
$ git commit -m"some meaningful message in present tense"
$ git push 
# you don't have to add "origin master" because you did "-u" the first time,
# which means we set that we will be pushing upstream to the master
# so it assumes every time we push, we do it to master
# if you type full command "git push origin master" it will work perfectly as well
```

**Not hard at all, right?** 
Use this cheat sheet for the first a couple of times until you find it unuseful since you know it by heart, not even thinking about it. :wink:


**Happy coding :heart:**