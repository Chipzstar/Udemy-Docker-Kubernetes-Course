db.createUser(
    {
        user: "chisom",
        pwd: "secret",
        roles: [
            {
                role: "readWrite",
                db: "course-goals"
            }
        ]
    }
);