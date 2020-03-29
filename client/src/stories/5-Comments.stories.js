import React from "react";
import Comments from "../components/Comments";
import "tachyons";

export default {
  title: "Comments",
  component: Comments
};

export const comments = [
  {
    text:
      "I worked for a group home. We had a difficult group of residents, but the company things so much worse.\
Every resident was 14-22 years old. They had moderate mental development delays (65-75 IQ range), they all had a psychiatric disorder (from severe ADHD to schizophrenia), and they had also all been convicted of a violent sexual crime.\
\
I worked 3rd shift. My normal hours were 10:30pm to 9am. Four days a week.\
About six months into bareworking there, they did a massive layoff.\
They went down to  minimum staff to student ratio each shift, with nobody extra to call in if needed. That meant if someone called out, a person on the previous shift was forced.\
It got to the point, where I was being forced 3 out of 4 shifts per week. And not just a few hours. I was working 10:30 pm to around 4:30 pm the next day, and still having to come in for my following shift. I had an hour commute each way.\
So I'd get home at 5:30 pm from a 16 hour shift, and have to leave the house again four hours later.\
Managed that for about a month. Then one morning I was told last minute I was being forced. Told them I was fucking done and walked out.\
That month took a huge toll on my mental health. Swear it took me like a year to recover.",
    comments: [
      {
        text:
          "I feel you on this one. I worked at a similar type of facility. The violent incidents that got them housed there weren't all sex-related, but the residents were all diminished capacity in varying degrees. You can only get into a wrestling match, without backup, so many times before you realize your own safety is slightly more important than the facility's administrative annual bonuses.",
        score: 800,
        comments: [
          {
            text:
              "I feel you on this one. I worked at a similar type of facility. The violent incidents that got them housed there weren't all sex-related, but the residents were all diminished capacity in varying degrees. You can only get into a wrestling match, without backup, so many times before you realize your own safety is slightly more important than the facility's administrative annual bonuses."
          },
          {
            text:
              "Not to mention if you used just a little too much force you were in deep shit. Most people would end up going a week unpaid every few months because there was a complaint that had to be investigated.\
Lost one of our best employees while I was there because one kid bit into his arm and he basically just responded naturally and backhanded the kid. Had a chunk of skin ripped off his arm, but fired immediately."
          }
        ]
      },
      {
        text:
          "Not to mention if you used just a little too much force you were in deep shit. Most people would end up going a week unpaid every few months because there was a complaint that had to be investigated.\
Lost one of our best employees while I was there because one kid bit into his arm and he basically just responded naturally and backhanded the kid. Had a chunk of skin ripped off his arm, but fired immediately."
      }
    ]
  },
  {
    text:
      "I feel you on this one. I worked at a similar type of facility. The violent incidents that got them housed there weren't all sex-related, but the residents were all diminished capacity in varying degrees. You can only get into a wrestling match, without backup, so many times before you realize your own safety is slightly more important than the facility's administrative annual bonuses."
  },
  {
    text:
      "Not to mention if you used just a little too much force you were in deep shit. Most people would end up going a week unpaid every few months because there was a complaint that had to be investigated.\
Lost one of our best employees while I was there because one kid bit into his arm and he basically just responded naturally and backhanded the kid. Had a chunk of skin ripped off his arm, but fired immediately.\
"
  }
];

export const DefaultComments = () => <Comments comments={comments} />;
