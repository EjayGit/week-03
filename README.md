# Assignment Week-03
## Core Requirement
### Reflection

Please also provide an assignment reflection in your project README.md file.
Required

    🎯 What requirements did you achieve?
    I achieved all core requirements.
    I also achieved the following stretch requirements:
        - Consolidate all upgrade management into a single function.
        - Implemented error handling using try-catch.
        - Fantastic use of README to provide important information such a a description of the project and how to deploy.
    🎯 Were there any requirements or goals that you were unable to achieve?
        - I did not try to implement other stretch requirements.
    🎯 If so, what was it that you found difficult about these tasks?

### Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

    Requesting feedback about a specific part of your submission.
    What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
        - I used MDN and previous workshops and assignments for reference.
    What errors or bugs did you encounter while completing your assignment? How did you solve them?
        - I came across a number of bugs that I did not record, however, from memory, one I particularly took note of was the implementation of the async/await function, when requiring the use of the resultant data variable, it was not as easily accessible as I thought it would been. At first I tried to return the variable to use it in a different function. I then discovered that if I was to call the second function directly from the async function, then it would work. This issue started with what is now line 91, with the function call: getStuff().
    What went really well and what could have gone better?
        The logic was handled really well and lent itself to the singular rewards function in the first instance. I think the reward button structuring went well too and this worked first time too and as expected, although I soon realised that when using the innerText of the elements elsewhere in the file, that I need to declare these globally first. This solved another bug.

## Stretch Requirement
### Project Description
This project sets out to provide a user with a clicker game. In this instance, the user is required to 'pet the cat', to gain petting points. Once the user has accrued different point scores, they may use the reward buttons to buy rewards that automate cat petting. The higher level buttons create more pettings per second. The user has their data saved every second, or click of a reward button.

#### Key features
- Cat petting app.
- Rewards collect automatic cat pet scoring.
- The more petting points you collect, the bigger the rewards you can gain.

### How to deploy this app
1. Start with finding an appropriate directory in your terminal and enter:

    git clone ssh-address-to-repository

2. Create a branch using the command:

    git checkout -b branch-name

3. Edit the files in the repository.

4. Once finished editing and ready to merge, enter the command:

    git add .
    git commit -m "commit message"
    git push -u origin branch-name

5. Once you have merged the files on GitHub, you should enter the following command in the git repository, in your terminal, in order to return to the main branch:

    git checkout main

6. Finally, to update your main repository with your remote repository, enter the command:

    git pull
