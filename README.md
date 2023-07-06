## NextJS Assignment

Assignment using NextJS to fetch the original 151 Pokemon from an API, including pagination functionality and a Pokemon detail page.

### Points of Improvement

- The user would be able to update the page size, for now it is a constant `20`.
- The Pagination component will show multiple available pages to click on instead of just `Previous` and `Next` so you can just to the start or end immediately.
- I wanted to add the Pokemon sprite or image and a few more details into the Pokemon Card but I couldn't seem to find it in the API.
- Moving to pages you have already visited on the pagination component will re-fetch the data we already had before, this could be cached or fixed with only using SSG.
- I don't feel like I correctly implemented the requirement asking to mix SSG and CSR, it feels more like a hacky solution so I am curious as to a better way of implementing.

### Architectural Decisions

- *Atomic Design Pattern:* For components, they have been split into `atoms`, `molecules` and `organisms` in order to seperate small and large components.
- *React Query:* I chose to omit the use of this library due to my unfamiliarity with it. I would have needed to spend too much time learning how to use the package correctly instead of being able to satisfy the requirements.
