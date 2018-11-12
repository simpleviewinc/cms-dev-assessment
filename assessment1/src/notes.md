Draft component stack:
- APP
    - Header item, which can change the post views
        - buttons
    - PostsView: based on type/number will make a regular or emphasized post
        - Post
            - type: is it an 'emphasized' post? (ie, on large, different than most)
            - image
            - title
            - other data, blah

TODO:
    Implemented passing of props to the PostsView and then subsequently passing to Post
    Now, need to allow for dynamic sized arrays (like the API will require in part 2) as
     well as cycling through the array in PostsView to set certain ones (1st and 6th of each set)
     to be emphasized