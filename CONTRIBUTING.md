# Contributing

Add graph facts as small JSON changes and run validation before submitting.

## IDs

Use stable lowercase IDs:

- `application:open-webui`
- `model:qwen2.5-7b-instruct`
- `dataset:the-pile`
- `software:llama.cpp`
- `benchmark:humaneval`
- `organization:hugging-face`
- `license:apache-2.0`

Edge IDs start with `edge:` and should describe source, relationship, and target.

## Adding data

1. Add or edit node JSON in the matching `data/nodes/<kind>/` directory.
2. Add relationship facts to the most relevant `data/edges/*.json` file.
3. Include deterministic provenance when possible.
4. Add metrics only when the value has a source and measurement date.
5. Run:

```bash
npm run validate
npm run visualize
```

Do not infer undisclosed training data as fact. If a source only says the data is undisclosed, represent the opacity as metadata or a dataset node with `openness: unknown`.
