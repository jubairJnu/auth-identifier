
# node-auth-identifier

Node.js authentication utility to identify and validate login input such as
email, phone number, or username from a single field.

Designed for Express, Next.js, MongoDB, and PostgreSQL muliti field authentication systems.


## Features

- Automatically Identify login input (email / phone / username)
- Fully configurable validation rules
- Works with Express & Next.js
- MongoDB &  PostgreSQL friendly
- TypeScript-first
- Lightweight & fast



## Benefits of Using

When implementing a multi-field login system, users can log in using email, phone number, or username from a single input field.

This package provides the following benefits:

🔐 Single input login — users don’t need to select a login type

🤖 Automatic input identification (email / phone / username)

⚙️ Custom validation rules for each identifier

🎯 Accurate field matching without conditional logic

🚀 Cleaner authentication code

🧠 Better user experience

🛡️ Safer database queries (prevents invalid field matching)


## Installation


```bash
  npm i node-auth-identifier
  cd node-auth-identifier
```
    
## 🚀 Basic Usage



```bash
import { identify } from "node-auth-identifier";

const result = identify("john_doe");

console.log(result);

```

### Output

```bash
{
  "type": "username",
  "field": "username",
  "value": "john_doe",
  "valid": true
}

```

### ⚙️ Custom Configuration

```bash
identify("john_doe", {
  username: {
    minLength: 3,
    maxLength: 20,
    allowUnderscore: true,
    allowDot: false
  }
});
```

### 🧩 Configuration Options

```bash
IdentifyConfig {
  trim?: boolean;
  caseInsensitive?: boolean;

  email?: { enabled?: boolean };
  phone?: {
    enabled?: boolean;
    minLength?: number;
    maxLength?: number;
  };
  username?: {
    enabled?: boolean;
    minLength?: number;
    maxLength?: number;
    allowUnderscore?: boolean;
    allowDot?: boolean;
  };
}
```

### 🟢 Express.js Authentication Example
```bash
app.post("/login", async (req, res) => {
  const { identifier } = req.body;

  const { field, value } = identify(identifier);

  const user = await User.findOne({ [field]: value });

  res.json(user);
});
```

### 🟡 Next.js Authentication Example (App Router)
```bash
export async function POST(req: Request) {
  const { identifier } = await req.json();

  const { field, value } = identify(identifier);

  return NextResponse.json(
    await db.user.findUnique({ where: { [field]: value } })
  );
}
```

### 🍃 MongoDB Login Query
```bash
const user = await User.findOne({ [field]: value });
```


### 🐘 PostgreSQL Login Query
```bash
SELECT * FROM users WHERE email = $1;
SELECT * FROM users WHERE phone = $1;
SELECT * FROM users WHERE username = $1;

```

## 🔐 Security Notes

Prevents user-controlled query keys

Safe for SQL & NoSQL databases

No global mutable state

Serverless & edge-safe

🧪 Validation Helpers
import { isEmail, isPhone, isUsername } from "node-auth-identifier";

## 📦 Use Cases

- User login systems
- Admin dashboards
- Multi-identifier authentication
- REST & GraphQL APIs





## 🛣 Roadmap

Country-based phone validation

CLI support

Error reason reporting

ESM support
## Authors

- [@jubairJnu](https://github.com/jubairJnu)

