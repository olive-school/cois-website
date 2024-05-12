# template repository

Thing to update after creating repo based on template repo.
1. Verify dockerfile and devcontainer file new snippets and rebuild container if required.
2. Add `base-artifactregistry-login`, `base-lint` and `base-build-serve-scripts` from snippet in package.json.
3. Run the artifactregistry script and add gcloud auth first. Again run the artifactregistery script to update .npmrc. 
4. Run `npm i @adapt/configs -D`
5. Checkout all base files and aa snippets as mentioned in comments in each file.
