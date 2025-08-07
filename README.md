
# n8n Template Generator

![n8n Template Generator Hero](public/placeholder-logo.png)

An AI-powered application that transforms natural language descriptions into ready-to-use n8n workflow templates. Describe your automation idea in plain English, and get a functional n8n JSON template in seconds.

## ✨ Features

- **AI-Powered Generation:** Leverages generative AI to understand your workflow description and create the corresponding n8n template.
- **Instant JSON Output:** Get a valid n8n JSON template that you can immediately import into your n8n instance.
- **Dynamic UI:** A clean, modern, and responsive interface that provides a seamless user experience.
- **Copy and Download:** Easily copy the generated JSON to your clipboard or download it as a `.json` file.
- **Example Prompts:** Get inspired with a list of common automation scenarios to get you started.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Vercel, Netlify, or any Node.js hosting.

## 📦 Installation

To get started with the n8n Template Generator, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/n8n-template-generator.git
    cd n8n-template-generator
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file by copying the example file:

    ```bash
    cp .env.example .env.local
    ```

    Then, open `.env.local` and add your n8n webhook URL:

    ```env
    NEXT_PUBLIC_N8N_WEBHOOK_URL="https://your-n8n-instance.com/webhook/your-generation-endpoint"
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1.  **Describe your workflow:** In the text area, describe the automation you want to create. Be as specific as possible, including the apps you want to connect and the actions you want to perform.
2.  **Generate the template:** Click the "Generate n8n Template" button.
3.  **Get the result:** The application will generate the n8n JSON template for you.
4.  **Copy or download:** You can either copy the JSON to your clipboard or download it as a `.json` file.
5.  **Import into n8n:** In your n8n instance, go to "Workflows" and click "Import from File" or "Import from URL" to use your new template.

## 🤝 Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. We appreciate all contributions from the community.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
