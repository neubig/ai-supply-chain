# Edge Quote Verification Checklist

This checklist tracks manual review of quote-backed edge sources. Check a box only after verifying that the quoted text directly supports the edge relationship shown in the item.

Regenerate with `npm run generate:edge-checklist`. Existing checked boxes are preserved only when the edge/source key and quote hash are unchanged.

Note-only edge sources are excluded from this checklist because they are explicitly source-needed or undisclosed rather than quote-backed.

## Summary

- Quote-backed edge sources: 327
- Checked: 240
- Unchecked: 87

<!-- edge-quote-verification-checklist:v1 -->


## data/edges/agent-sandboxing.json

- [x] <!-- edge-quote-verification key="1e4165d1ce7c747a" quote_sha256="20e143950f5c620fcddaf74b7d99b3d4502e6543ea60fa81ccb3480999a3e4de" --> `edge:anythingllm-sandboxed-by-docker-moby` / `edge-source:anythingllm-docker`
  - Edge: `application:anythingllm --sandboxed_by--> software:docker-moby`
  - Source URL: https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/master/README.md
  - Quote: "`docker`: Docker instructions and build process + information for building from source."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f27098146583fc29" quote_sha256="1a0febad0cafbedd2944b168cfaa44f6564f246b5beb8062f9cf417233849615" --> `edge:dagger-depends-on-docker-moby` / `edge-source:dagger-repo`
  - Edge: `software:dagger --depends_on--> software:docker-moby`
  - Source URL: https://raw.githubusercontent.com/dagger/dagger/main/README.md
  - Quote: "**Local-first**. Once you automate a task with Dagger, it will reliably run on any supported system: your laptop, AI sandbox, CI server, or dedicated cloud infrastructure. The only dependency is a container runtime like Docker."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f35f3360de94e616" quote_sha256="4b621cc18868fa6a861aa4ccd5c77a853402d9bf32b92d13c6242ad07406a369" --> `edge:daytona-sandboxed-by-docker-moby` / `edge-source:daytona-docker`
  - Edge: `software:daytona --sandboxed_by--> software:docker-moby`
  - Source URL: https://raw.githubusercontent.com/daytonaio/daytona/main/README.md
  - Quote: "Built on OCI/Docker compatibility, massive parallelization, and unlimited persistence, sandboxes deliver consistent, predictable environments for agent workflows."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="544f8c58ee45fc88" quote_sha256="bdb211aaeea8931980d0c9976beaaa017471aa3849fb7dbb0e94153beb704b34" --> `edge:e2b-infra-sandboxed-by-firecracker` / `edge-source:e2b-infra`
  - Edge: `software:e2b-infra --sandboxed_by--> software:firecracker`
  - Source URL: https://raw.githubusercontent.com/e2b-dev/infra/main/self-host.md
  - Quote: "E2B is using [Firecracker](https://github.com/firecracker-microvm/firecracker) for Sandboxes."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="9b826e003ceb2eb5" quote_sha256="d67a73b076d47017705ab673e96145104d411aa4d470fc80c705ce0887188631" --> `edge:kata-containers-depends-on-kubernetes` / `edge-source:kata-containers`
  - Edge: `software:kata-containers --depends_on--> software:kubernetes`
  - Source URL: https://raw.githubusercontent.com/kata-containers/documentation/master/how-to/run-kata-with-k8s.md
  - Quote: "Kubernetes CRI (Container Runtime Interface) implementations allow using any OCI-compatible runtime with Kubernetes, such as the Kata Containers runtime."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6f92d033c36f05a4" quote_sha256="d49e2ac9f769212cd7228e8c97a2c4659dd6e74efd1c5791e64a6b08419599d8" --> `edge:kserve-depends-on-kubernetes` / `edge-source:kserve-repo`
  - Edge: `software:kserve --depends_on--> software:kubernetes`
  - Source URL: https://raw.githubusercontent.com/kserve/kserve/master/README.md
  - Quote: "KServe is a standardized distributed generative and predictive AI inference platform for scalable, multi-framework deployment on Kubernetes."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ac8a58fa2ec1576d" quote_sha256="3d8e9c2a15699092964d270c5ae18e019cc5c39f3021c0c2653a4a79f21ee3b9" --> `edge:kubernetes-supports-gvisor` / `edge-source:kubernetes-gvisor`
  - Edge: `software:kubernetes --supports--> software:gvisor`
  - Source URL: https://raw.githubusercontent.com/google/gvisor/master/README.md
  - Quote: "gVisor includes an [Open Container Initiative (OCI)][oci] runtime called `runsc` that makes it easy to work with existing container tooling. The `runsc` runtime integrates with Docker and Kubernetes, making it simple to run sandboxed containers."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="24f951ac3b78005a" quote_sha256="260d819f15de116e8644e4622b920efb2cc1da100c3b12d41614ba63edc06097" --> `edge:librechat-sandboxed-by-docker-moby` / `edge-source:librechat-repo`
  - Edge: `application:librechat --sandboxed_by--> software:docker-moby`
  - Source URL: https://raw.githubusercontent.com/danny-avila/LibreChat/main/README.md
  - Quote: "Configure Proxy, Reverse Proxy, Docker, & many Deployment options"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d94756a0a3768045" quote_sha256="6775ca79b9e7cad2aa53251153fe1e69d2366d17e6116fff47ae40159512629c" --> `edge:open-webui-sandboxed-by-docker-moby` / `edge-source:open-webui-docker`
  - Edge: `application:open-webui --sandboxed_by--> software:docker-moby`
  - Source URL: https://raw.githubusercontent.com/open-webui/open-webui/main/README.md
  - Quote: "Install seamlessly using Docker or Kubernetes (kubectl, kustomize or helm) for a hassle-free experience with support for both `:ollama` and `:cuda` tagged images."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f4f96073deec9b16" quote_sha256="e53a6ba3f77dcf320d53ac984e2fa464ea73e4c6127c965c31140297bcd50fb0" --> `edge:openhands-runtime-sandboxed-by-docker-moby` / `edge-source:openhands-docker`
  - Edge: `software:openhands-runtime --sandboxed_by--> software:docker-moby`
  - Source URL: https://raw.githubusercontent.com/OpenHands/OpenHands/main/.openhands/microagents/glossary.md
  - Quote: "A containerized runtime environment that provides isolation and reproducibility for agent operations."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8fdc985f2c59548b" quote_sha256="5fd6723fd18a6a99897a2fd1aee4f49f00ffca4d71004c81e7f2c3e2a4bf0309" --> `edge:openhands-sandboxed-by-openhands-runtime` / `edge-source:openhands-runtime`
  - Edge: `application:openhands --sandboxed_by--> software:openhands-runtime`
  - Source URL: https://raw.githubusercontent.com/OpenHands/OpenHands/main/.openhands/microagents/glossary.md
  - Quote: "The execution environment where agents perform their tasks, which can be local, remote, or containerized."
  - Manual verification: quote directly supports the edge relationship.


## data/edges/application-stacks.json

- [x] <!-- edge-quote-verification key="95f5f2fd7027c2a0" quote_sha256="2ffe2ebb3cdf65deda9705ddb31eab9083d57c8af11d71757f6e27eae210b1e8" --> `edge:anythingllm-developed-by-mintplex-labs` / `edge-source:anythingllm-github`
  - Edge: `application:anythingllm --developed_by--> organization:mintplex-labs`
  - Source URL: https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/master/README.md
  - Quote: "AnythingLLM by Mintplex Labs Inc contains a telemetry feature that collects anonymous usage information."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="721e18de36c4cd64" quote_sha256="c56a28b353fd6559ec7b73883b59bb02a1f75ff40542c601f9479dcb5a086753" --> `edge:anythingllm-licensed-as-mit` / `edge-source:anythingllm-license`
  - Edge: `application:anythingllm --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/master/LICENSE
  - Quote: "The MIT License"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="514e8b6ba3307e3d" quote_sha256="29b391123d3cf321f4334b26df2e31542f9361ebd8b49aebca8588d30fc1cd4b" --> `edge:anythingllm-supports-nomic-embed-text-v1.5` / `edge-source:anythingllm-repo`
  - Edge: `application:anythingllm --supports--> model:nomic-embed-text-v1.5`
  - Source URL: https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/master/docker/.env.example
  - Quote: "# EMBEDDING_MODEL_PREF='nomic-ai/nomic-embed-text-v1.5-GGUF/nomic-embed-text-v1.5.Q4_0.gguf'"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="02cac98bde51e91e" quote_sha256="a4f571728e5a17ba137638654d6a989031a8ba28bdc5b6950efb937724219e53" --> `edge:anythingllm-supports-ollama` / `edge-source:anythingllm-repo`
  - Edge: `application:anythingllm --supports--> software:ollama`
  - Source URL: https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/master/README.md
  - Quote: "### Supported LLMs, Embedder Models, Speech models, and Vector Databases **Large Language Models (LLMs):** - [Any open-source llama.cpp compatible model](/server/storage/models/README.md#text-generation-llm-selection) - [OpenAI](https://openai.com) - [OpenAI (Generic)](https://openai.com) - [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service) - [AWS Bedrock](https://aws.amazon.com/bedrock/) - [Anthropic](https://www.anthropic.com/) - [NVIDIA NIM (chat models)](https://build.nvidia.com/explore/discover) - [Google Gemini Pro](https://ai.google.dev/) - [Ollama (ch"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="08bdc0753fe71bf8" quote_sha256="d3ef9edbfdb39e0c4639f1e75fce9beaf2a0ac941f1d8adff1e7520efd3fe96c" --> `edge:comfyui-depends-on-pytorch` / `edge-source:comfyui-repo`
  - Edge: `application:comfyui --depends_on--> software:pytorch`
  - Source URL: https://raw.githubusercontent.com/Comfy-Org/ComfyUI/master/README.md
  - Quote: "AMD users can install rocm and pytorch with pip if you don't have it already installed, this is the command to install the stable version:"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="dad96f28727a0cb6" quote_sha256="c264f59c9cb4718dd494e59f2b3f34f7d7a12a7f34ebfeb8acd8fd5a2cc3638b" --> `edge:comfyui-developed-by-comfy-org` / `edge-source:comfyui-github`
  - Edge: `application:comfyui --developed_by--> organization:comfy-org`
  - Source URL: https://api.github.com/repos/Comfy-Org/ComfyUI
  - Quote: ""full_name": "Comfy-Org/ComfyUI","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fc2c3bede3ef090e" quote_sha256="2b4855cc1257ea548760a7583262297a49e7c1f1ded9de25d49f4af8f6551985" --> `edge:comfyui-licensed-as-gpl-3.0` / `edge-source:comfyui-license`
  - Edge: `application:comfyui --licensed_as--> license:gpl-3.0`
  - Source URL: https://raw.githubusercontent.com/Comfy-Org/ComfyUI/master/LICENSE
  - Quote: "GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="184bf6ed9caa703b" quote_sha256="974d49379fafd2483a9ff1eb40e16f4ceb15f4cf31be57250c4ef53ba41d03b7" --> `edge:comfyui-supports-stable-diffusion-xl-base-1.0` / `edge-source:comfyui-repo`
  - Edge: `application:comfyui --supports--> model:stable-diffusion-xl-base-1.0`
  - Source URL: https://raw.githubusercontent.com/Comfy-Org/ComfyUI/master/README.md
  - Quote: "- [SDXL](https://comfyanonymous.github.io/ComfyUI_examples/sdxl/), [SDXL Turbo](https://comfyanonymous.github.io/ComfyUI_examples/sdturbo/)"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="aaf2d649388cc292" quote_sha256="ead32d1fd88c099c38f09238bda082fa167fdd9d869903b9be6867f469997f30" --> `edge:continue-developed-by-continue` / `edge-source:continue-official`
  - Edge: `application:continue --developed_by--> organization:continue`
  - Source URL: https://api.github.com/repos/continuedev/continue
  - Quote: ""full_name": "continuedev/continue","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5828d155fcec9bcd" quote_sha256="55f12528ddd4240e797f6391c80f5cf883e9c281253ad296c30b97dd4810c0a6" --> `edge:continue-licensed-as-apache-2.0` / `edge-source:continue-license`
  - Edge: `application:continue --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/continuedev/continue/main/LICENSE
  - Quote: "Licensed under the Apache License, Version 2.0 (the "License");"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5cc8e7f6724ae3ed" quote_sha256="93d3a2f6bb7a6d6f2221d046f311ded2614734e40c1baca33b5dbca9fef7b574" --> `edge:gpt4all-depends-on-llama.cpp` / `edge-source:gpt4all-repo`
  - Edge: `application:gpt4all --depends_on--> software:llama.cpp`
  - Source URL: https://raw.githubusercontent.com/nomic-ai/gpt4all/main/README.md
  - Quote: "`gpt4all` gives you access to LLMs with our Python client around `llama.cpp` implementations."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d142db85ca1da943" quote_sha256="1b2ac82bc73a0030900d10e17012946cc7c3b1fc105a7c0c0a05c60d44545f38" --> `edge:gpt4all-developed-by-nomic-ai` / `edge-source:gpt4all-github`
  - Edge: `application:gpt4all --developed_by--> organization:nomic-ai`
  - Source URL: https://api.github.com/repos/nomic-ai/gpt4all
  - Quote: ""full_name": "nomic-ai/gpt4all","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="428d8ea808a5a5b2" quote_sha256="74896d15800f7a637980e42b247d49c602d3b252520ad66a6cd1e852109cc9fb" --> `edge:gpt4all-licensed-as-mit` / `edge-source:gpt4all-license`
  - Edge: `application:gpt4all --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/nomic-ai/gpt4all/main/LICENSE.txt
  - Quote: "The MIT License (MIT)"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="31b0880571330fc5" quote_sha256="61fd4c3bc2c06f16f08cf434105be7b8149b28ef3d2784b395a74506090e9d32" --> `edge:jan-depends-on-llama.cpp` / `edge-source:jan-repo`
  - Edge: `application:jan --depends_on--> software:llama.cpp`
  - Source URL: https://raw.githubusercontent.com/janhq/jan/main/README.md
  - Quote: "Built on the shoulders of giants: - [Llama.cpp](https://github.com/ggerganov/llama.cpp)"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b428d6f5e3933034" quote_sha256="fb3de1a171efde82c7767c17e484ca18e972bc7956e2e7d65a9798c7458cb5a6" --> `edge:jan-developed-by-menlo-research` / `edge-source:jan-license`
  - Edge: `application:jan --developed_by--> organization:menlo-research`
  - Source URL: https://raw.githubusercontent.com/janhq/jan/main/LICENSE
  - Quote: "This product includes software developed by Menlo Research (https://menlo.ai)."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bca7c4b3d21eb201" quote_sha256="8f218d7c573d5f6225c1b6ccf8531f9e9115b6b8e598147bffe195307f3cfb71" --> `edge:jan-hosted-by-consumer-device` / `edge-source:jan-repo-description`
  - Edge: `application:jan --hosted_by--> infrastructure:consumer-device`
  - Source URL: https://api.github.com/repos/janhq/jan
  - Quote: ""description": "Jan is an open source alternative to ChatGPT that runs 100% offline on your computer.","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f7dfc0344bfabae6" quote_sha256="55f12528ddd4240e797f6391c80f5cf883e9c281253ad296c30b97dd4810c0a6" --> `edge:jan-licensed-as-apache-2.0` / `edge-source:jan-license`
  - Edge: `application:jan --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/janhq/jan/main/LICENSE
  - Quote: "Licensed under the Apache License, Version 2.0 (the "License");"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e5230078454e4f9a" quote_sha256="c2436784588a4cf0104e63de1a3f07ffaf1170119bc644fcee43ce90a135d03e" --> `edge:open-webui-developed-by-open-webui` / `edge-source:open-webui-github-org`
  - Edge: `application:open-webui --developed_by--> organization:open-webui`
  - Source URL: https://api.github.com/repos/open-webui/open-webui
  - Quote: ""full_name": "open-webui/open-webui","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="46ff4974766c522b" quote_sha256="4b53566f1db6900b9a92b15342aea0f1ece71162d5eba7e441b2787dd9c54d59" --> `edge:open-webui-licensed-as-open-webui-license` / `edge-source:open-webui-license`
  - Edge: `application:open-webui --licensed_as--> license:open-webui`
  - Source URL: https://raw.githubusercontent.com/open-webui/open-webui/main/LICENSE
  - Quote: "Open WebUI License"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="13835d2fc59db8ca" quote_sha256="6acd09215aa296610e72a822c6c3171d2c5cca817ac5ad8f486301f565e895aa" --> `edge:open-webui-supports-ollama` / `edge-source:open-webui-repo-description`
  - Edge: `application:open-webui --supports--> software:ollama`
  - Source URL: https://raw.githubusercontent.com/open-webui/open-webui/main/README.md
  - Quote: "**Open WebUI is an extensible, feature-rich, and user-friendly self-hosted AI platform designed to operate entirely offline.** It supports various LLM runners like **Ollama** and **OpenAI-compatible APIs**, with **built-in inference engine** for RAG, making it a **powerful AI deployment solution**."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2e32144f29c63914" quote_sha256="7646c6efcb331442538b02efb91e2d56f7a3ba5dd5050848a13a65bb9dd0a821" --> `edge:openhands-developed-by-openhands` / `edge-source:openhands-github`
  - Edge: `application:openhands --developed_by--> organization:openhands`
  - Source URL: https://raw.githubusercontent.com/OpenHands/OpenHands/main/README.md
  - Quote: ""full_name": "OpenHands/OpenHands","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="98b503cfee696f99" quote_sha256="0ab9c137a5613b3ff06fc48b7790824433e2b4ab4a14117103fb15f93de7f034" --> `edge:openhands-licensed-as-open-core` / `edge-source:openhands-license`
  - Edge: `application:openhands --licensed_as--> license:open-core-mit-enterprise`
  - Source URL: https://raw.githubusercontent.com/OpenHands/OpenHands/main/LICENSE
  - Quote: "Portions of this software are licensed as follows: * All content that resides under the enterprise/ directory is licensed under the license defined in "enterprise/LICENSE". * Content outside of the above mentioned directories or restrictions above is available under the MIT license as defined below."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="16df2150ee84fde7" quote_sha256="6ea6f92138e5d6be99f134af6c79f59b52c23023aca48170a266de364a5252b5" --> `edge:stable-diffusion-webui-depends-on-pytorch` / `edge-source:sd-webui-repo`
  - Edge: `application:stable-diffusion-webui --depends_on--> software:pytorch`
  - Source URL: https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/modules/launch_utils.py
  - Quote: "torch_command = os.environ.get('TORCH_COMMAND', f"pip install torch==2.1.2 torchvision==0.16.2 --extra-index-url {torch_index_url}")"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ec6fbac4400a6258" quote_sha256="e7db366e6325a5c24644e6c46b161d9907c180615494227eef8c01a4a7bff47b" --> `edge:stable-diffusion-webui-developed-by-automatic1111` / `edge-source:sd-webui-github`
  - Edge: `application:stable-diffusion-webui --developed_by--> organization:automatic1111`
  - Source URL: https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui
  - Quote: ""full_name": "AUTOMATIC1111/stable-diffusion-webui","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f65ddb39fe067d22" quote_sha256="86e74624cedb11d968f166b17ed8befed89f8df1e258b8de169d335b7829cf56" --> `edge:stable-diffusion-webui-licensed-as-agpl-3.0` / `edge-source:sd-webui-license`
  - Edge: `application:stable-diffusion-webui --licensed_as--> license:agpl-3.0`
  - Source URL: https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/LICENSE.txt
  - Quote: "GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="aeb8feb67ff4dd45" quote_sha256="3131c55d2d72de571b56cc7d839dec6bcab6c60b8bef4eab48128834017fbe34" --> `edge:stable-diffusion-webui-supports-stable-diffusion-xl-base-1.0` / `edge-source:sd-webui-repo`
  - Edge: `application:stable-diffusion-webui --supports--> model:stable-diffusion-xl-base-1.0`
  - Source URL: https://raw.githubusercontent.com/wiki/AUTOMATIC1111/stable-diffusion-webui/Features.md
  - Quote: "Support for SD-XL was added in version `1.5.0`, with additional memory optimizations and built-in sequenced refiner inference added in version `1.6.0`."
  - Manual verification: quote directly supports the edge relationship.


## data/edges/hardware-compatibility.json

- [x] <!-- edge-quote-verification key="523ac655d74b8bbc" quote_sha256="7621442ab384bc251d7c8d5c05dd1e0f72cd81d4bd704a6d7dc85dae3a316d62" --> `edge:deepspeed-supports-hardware-nvidia-h200` / `edge-source:deepspeed-repo`
  - Edge: `software:deepspeed --supports_hardware--> infrastructure:nvidia-h200`
  - Source URL: https://raw.githubusercontent.com/deepspeedai/DeepSpeed/master/README.md
  - Quote: "Specific GPUs we develop and test against are listed below, this doesn't mean your GPU will not work if it doesn't fall into this category it's just DeepSpeed is most well tested on the following: * NVIDIA: Pascal, Volta, Ampere, and Hopper architectures"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ce4345d8c2474b9d" quote_sha256="8b69473cc0b0d4e10f389fc0c4778f4ee22ba0bd93258a19ad44555ddbdb6794" --> `edge:gpt4all-runs-on-consumer-device` / `edge-source:gpt4all-hardware`
  - Edge: `application:gpt4all --runs_on--> infrastructure:consumer-device`
  - Source URL: https://api.github.com/repos/nomic-ai/gpt4all
  - Quote: ""description":"GPT4All: Run Local LLMs on Any Device. Open-source and available for commercial use.""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d0a4c2dad34e7e76" quote_sha256="4d74c054743eb6cdff226ca8dddeb37ea43b7cc7cc30a0bec8913c47c8986aab" --> `edge:jan-runs-on-consumer-device` / `edge-source:jan-hardware`
  - Edge: `application:jan --runs_on--> infrastructure:consumer-device`
  - Source URL: https://raw.githubusercontent.com/janhq/jan/main/README.md
  - Quote: "- **Privacy First**: Everything runs locally when you want it to"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="edc655633b820067" quote_sha256="c827a477f7615f9d17f9952f18b75edff1aff3bdcde0aa919aaa32e9458bb99a" --> `edge:llama.cpp-supports-hardware-apple-m5-max` / `edge-source:llama.cpp-metal`
  - Edge: `software:llama.cpp --supports_hardware--> infrastructure:apple-m5-max`
  - Source URL: https://raw.githubusercontent.com/ggml-org/llama.cpp/master/README.md
  - Quote: "- Apple silicon is a first-class citizen - optimized via ARM NEON, Accelerate and Metal frameworks"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b2d148e55e4cbb28" quote_sha256="a6f310e4b3250d633279c6de0878f1eebec9beae22b2559815e6cd7ed4d5469a" --> `edge:llama.cpp-supports-hardware-rtx-5090` / `edge-source:llama.cpp-gpu-docs`
  - Edge: `software:llama.cpp --supports_hardware--> infrastructure:nvidia-rtx-5090`
  - Source URL: https://raw.githubusercontent.com/ggml-org/llama.cpp/master/README.md
  - Quote: "- Custom CUDA kernels for running LLMs on NVIDIA GPUs (support for AMD GPUs via HIP and Moore Threads GPUs via MUSA)"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c72a6769b13711b4" quote_sha256="f2a351f66143cd37715e6f71b9f24ee60a3a24696e483236ead70df5108ba241" --> `edge:megatron-lm-optimized-for-nvidia-b200` / `edge-source:megatron-lm`
  - Edge: `software:megatron-lm --optimized_for--> infrastructure:nvidia-b200`
  - Source URL: https://raw.githubusercontent.com/NVIDIA/Megatron-LM/main/README.md
  - Quote: "- **[2025/08]** **[Mixture of Experts (MoE) Q3–Q4 2025 Roadmap](https://github.com/NVIDIA/Megatron-LM/issues/1729)** - Comprehensive roadmap for MoE features including DeepSeek-V3, Qwen3, advanced parallelism strategies, FP8 optimizations, and Blackwell performance enhancements."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f99f7c887456c59c" quote_sha256="e14b2f8c3675bf9739f324c7044b56496cdc117eff97d6bc7f443b6ba173e0e6" --> `edge:ollama-supports-hardware-apple-m5-max` / `edge-source:ollama-apple-silicon`
  - Edge: `software:ollama --supports_hardware--> infrastructure:apple-m5-max`
  - Source URL: https://ollama.com/blog/mlx
  - Quote: "This results in a large speedup of Ollama on all Apple Silicon devices. On Apple’s M5, M5 Pro and M5 Max chips, Ollama leverages the new GPU Neural Accelerators to accelerate both time to first token (TTFT) and generation speed (tokens per second)."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="a294cc239e42f56a" quote_sha256="bc054d9c58b8130a21dd381483a3b2bcadeb7e24c9135baf0d30b6d571537b84" --> `edge:ollama-supports-hardware-rtx-5090` / `edge-source:ollama-hardware`
  - Edge: `software:ollama --supports_hardware--> infrastructure:nvidia-rtx-5090`
  - Source URL: https://docs.ollama.com/gpu
  - Quote: "Ollama supports Nvidia GPUs with compute capability 5.0+ and driver version 531 and newer. Nvidia GPUs with compute capability 5.0 through 6.2 require driver version 570 or newer."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="42941c9234042935" quote_sha256="8a66d369a911f412889ca875f5b85dd04fd14b060401e1effb911d7fce590cdb" --> `edge:pytorch-supports-hardware-amd-mi300x` / `edge-source:pytorch-rocm-docs`
  - Edge: `software:pytorch --supports_hardware--> infrastructure:amd-mi300x`
  - Source URL: https://pytorch.org/docs/2.12/_sources/notes/hip.rst.txt
  - Quote: "ROCm\ \|trade\| is AMD’s open source software platform for GPU-accelerated high performance computing and machine learning. HIP is ROCm's C++ dialect designed to ease conversion of CUDA applications to portable C++ code. HIP is used when converting existing CUDA applications like PyTorch to portable C++ and for new projects that require portability between AMD and NVIDIA."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6ee85a39e703cee0" quote_sha256="34626354785ac2b083284cff22e459aff15a1d842cdaa6e3577a7cfe3e34b887" --> `edge:pytorch-supports-hardware-aws-trainium3` / `edge-source:aws-trainium3`
  - Edge: `software:pytorch --supports_hardware--> infrastructure:aws-trainium3`
  - Source URL: https://awsdocs-neuron.readthedocs-hosted.com/en/latest/frameworks/torch/index.html
  - Quote: "PyTorch support on AWS Neuron SDK - TorchNeuron Native for eager execution and torch.compile on Trainium and Inferentia, with torch-neuronx XLA-based support for training and inference."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="495c33158b76f2be" quote_sha256="7a2e60aeb8e46f07cc5c9b43f60fb0af15957bd03e2d343ede89e77a816e440f" --> `edge:pytorch-supports-hardware-google-tpu-v6e-trillium` / `edge-source:pytorch-xla-docs`
  - Edge: `software:pytorch --supports_hardware--> infrastructure:google-cloud-tpu-v6e-trillium`
  - Source URL: https://pytorch.org/xla/release/r2.8/_sources/index.rst.txt
  - Quote: "``torch_xla`` is a Python package that implements \ `XLA <https://openxla.org/xla>`_ as a backend for PyTorch. +------------------------------------------------+------------------------------------------------+------------------------------------------------+ \| **Familiar APIs** \| **High Performance** \| **Cost Efficient** \| \| \| \| \| \| Create and train PyTorch models on TPUs, \| Scale training jobs across thousands of \| TPU hardware and the XLA compiler are optimized\| \| with only minimal changes required. \| TPU cores while maintaining high MFU. \| for cost-efficient training and inf"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="be118075f779ce6e" quote_sha256="a2685be6316de81a43a455bf8a8ddc90f9b5c7c0e52db0ea16f7ea7b499f37d1" --> `edge:pytorch-supports-hardware-intel-gaudi-3` / `edge-source:intel-gaudi-3-pytorch`
  - Edge: `software:pytorch --supports_hardware--> infrastructure:intel-gaudi-3`
  - Source URL: https://docs.habana.ai/en/latest/_sources/PyTorch/Getting_Started_with_PyTorch_and_Gaudi/Getting_Started_with_PyTorch.rst.txt
  - Quote: "This guide provides simple steps for preparing a PyTorch model to run training on Intel® Gaudi® AI accelerator."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e13cb527b4a7e38d" quote_sha256="e52542648bab8971763421900201edaff8dbbd78a87459ca9ae4150061a7839e" --> `edge:pytorch-supports-hardware-nvidia-h100` / `edge-source:pytorch-cuda-docs`
  - Edge: `software:pytorch --supports_hardware--> infrastructure:nvidia-h100`
  - Source URL: https://pytorch.org/docs/2.12/cuda.html
  - Quote: "This package adds support for CUDA tensor types. It implements the same function as CPU tensors, but they utilize GPUs for computation."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b68948071f61a6e2" quote_sha256="6ed4b0ff0ab9d4af59b667861e624252bb629e03eac0f7a29a82dac60f9b279d" --> `edge:stable-diffusion-webui-runs-on-rtx-5090` / `edge-source:stable-diffusion-webui-repo`
  - Edge: `application:stable-diffusion-webui --runs_on--> infrastructure:nvidia-rtx-5090`
  - Source URL: https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/README.md
  - Quote: "Make sure the required [dependencies](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies) are met and follow the instructions available for: - [NVidia](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs) (recommended)"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="4723c51fe28930f7" quote_sha256="6d685a469940d9f0ee4f0e244feaab346118dea7e5deeee47278b52f1d137e9f" --> `edge:stable-diffusion-xl-base-1.0-requires-accelerated-inference` / `edge-source:sdxl-card`
  - Edge: `model:stable-diffusion-xl-base-1.0 --requires--> infrastructure:nvidia-rtx-5090`
  - Source URL: https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/raw/main/README.md
  - Quote: "If you are limited by GPU VRAM, you can enable *cpu offloading* by calling `pipe.enable_model_cpu_offload` instead of `.to("cuda")`:"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="7f2805abaad92188" quote_sha256="11600b427031a5897493ad732cf8bb95f09448ef0fd973b053492ab0aabf08e4" --> `edge:triton-inference-server-supports-hardware-nvidia-b200` / `edge-source:triton-server`
  - Edge: `software:triton-inference-server --supports_hardware--> infrastructure:nvidia-b200`
  - Source URL: https://raw.githubusercontent.com/triton-inference-server/server/main/README.md
  - Quote: "Triton Inference Server supports inference across cloud, data center, edge and embedded devices on NVIDIA GPUs, x86 and ARM CPU, or AWS Inferentia. Triton Inference Server delivers optimized performance for many query types, including real time, batched, ensembles and audio/video streaming."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="413f5a4267c225d0" quote_sha256="e9178bdf66b8b99c475faffdfd4f481cadb3adae555fdb1190db69e99f73fc39" --> `edge:unsloth-supports-hardware-rtx-5090` / `edge-source:unsloth-repo`
  - Edge: `software:unsloth --supports_hardware--> infrastructure:nvidia-rtx-5090`
  - Source URL: https://raw.githubusercontent.com/unslothai/unsloth/main/README.md
  - Quote: "* **NVIDIA:** Training works on RTX 30/40/50, Blackwell, DGX Spark, Station and more"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="a3a897050473986d" quote_sha256="59f704192a5cdcd5090e38a0c36b6ed91d74f7e897d3e7eb9f12471199b8f824" --> `edge:vllm-supports-hardware-amd-mi325x` / `edge-source:vllm-rocm`
  - Edge: `software:vllm --supports_hardware--> infrastructure:amd-mi325x`
  - Source URL: https://docs.vllm.ai/projects/recipes/en/latest/OpenAI/GPT-OSS.html
  - Quote: "In vLLM, you can run it on NVIDIA H100, H200, B200 as well as MI300x, MI325x, MI355x and Radeon AI PRO R9700."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0f1fdf876e34b4bb" quote_sha256="59f704192a5cdcd5090e38a0c36b6ed91d74f7e897d3e7eb9f12471199b8f824" --> `edge:vllm-supports-hardware-nvidia-h100` / `edge-source:vllm-hardware`
  - Edge: `software:vllm --supports_hardware--> infrastructure:nvidia-h100`
  - Source URL: https://docs.vllm.ai/projects/recipes/en/latest/OpenAI/GPT-OSS.html
  - Quote: "In vLLM, you can run it on NVIDIA H100, H200, B200 as well as MI300x, MI325x, MI355x and Radeon AI PRO R9700."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d37b1d0c3633d621" quote_sha256="59f704192a5cdcd5090e38a0c36b6ed91d74f7e897d3e7eb9f12471199b8f824" --> `edge:vllm-supports-hardware-nvidia-h200` / `edge-source:vllm-h200`
  - Edge: `software:vllm --supports_hardware--> infrastructure:nvidia-h200`
  - Source URL: https://docs.vllm.ai/projects/recipes/en/latest/OpenAI/GPT-OSS.html
  - Quote: "In vLLM, you can run it on NVIDIA H100, H200, B200 as well as MI300x, MI325x, MI355x and Radeon AI PRO R9700."
  - Manual verification: quote directly supports the edge relationship.


## data/edges/librechat-stack.json

- [x] <!-- edge-quote-verification key="27e9db092dad1673" quote_sha256="0d849dc67afb30a821e857dfa25f8b7f2bce5c7cd0927039cde6f335b58939a7" --> `edge:librechat-developed-by-danny-avila` / `edge-source:librechat-maintainer`
  - Edge: `application:librechat --developed_by--> organization:danny-avila`
  - Source URL: https://api.github.com/repos/danny-avila/LibreChat
  - Quote: ""full_name": "danny-avila/LibreChat","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="649ae4c6f2f90af5" quote_sha256="abb2896dc3c2a9402f901b88d5035cf0a83d5cf7c17e73642cdf562b0b9d3bc5" --> `edge:librechat-licensed-as-mit` / `edge-source:librechat-license`
  - Edge: `application:librechat --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/danny-avila/LibreChat/main/LICENSE
  - Quote: "MIT License"
  - Manual verification: quote directly supports the edge relationship.


## data/edges/lobehub-stack.json

- [x] <!-- edge-quote-verification key="dd8b89c338fa0418" quote_sha256="13d9db7054e98f5c390d020e5d97b8a332bcc9b02f3d4ef4883f1a0cc84d2bcf" --> `edge:lobehub-developed-by-lobehub` / `edge-source:lobehub-org`
  - Edge: `application:lobehub --developed_by--> organization:lobehub`
  - Source URL: https://api.github.com/repos/lobehub/lobehub
  - Quote: ""full_name": "lobehub/lobehub","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="48ff9f74df99b80c" quote_sha256="027adb8b15114cc4b91e60b2205567da15a1ee457f24ade7cf3c9e835967f400" --> `edge:lobehub-licensed-as-other-composite` / `edge-source:lobehub-license`
  - Edge: `application:lobehub --licensed_as--> license:other-composite`
  - Source URL: https://raw.githubusercontent.com/lobehub/lobehub/main/README.md
  - Quote: "This project is LobeHub Community License licensed."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d833a123d2b67a4d" quote_sha256="07e44b3552f4b822e7ad18577be18c40dd050de8fb7fc8a0d83db0d763adcfd7" --> `edge:lobehub-sandboxed-by-docker-moby` / `edge-source:lobehub-docker`
  - Edge: `application:lobehub --sandboxed_by--> software:docker-moby`
  - Source URL: https://raw.githubusercontent.com/lobehub/lobehub/main/README.md
  - Quote: "We provide a Docker image for deploying the LobeHub service on your own private device. Use the following command to start the LobeHub service:"
  - Manual verification: quote directly supports the edge relationship.


## data/edges/model-supply-chain.json

- [x] <!-- edge-quote-verification key="75cbfc0f0659469a" quote_sha256="be85d08d5515c5fb7ef4a80568f02616068655b75e2ee59c0e8ee664a0f0d205" --> `edge:gpt-j-6b-developed-by-eleutherai` / `edge-source:gpt-j-hf`
  - Edge: `model:gpt-j-6b --developed_by--> organization:eleutherai`
  - Source URL: https://huggingface.co/api/models/EleutherAI/gpt-j-6b
  - Quote: ""author":"EleutherAI""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="3d2818bd1f3b6258" quote_sha256="d439dfaa96f6849c3cda91fb3c09b45d57bbe75d35a2d56d85a690c7124893a3" --> `edge:gpt-j-6b-hosted-by-hugging-face-hub` / `edge-source:gpt-j-hf`
  - Edge: `model:gpt-j-6b --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/EleutherAI/gpt-j-6b
  - Quote: "<title>EleutherAI/gpt-j-6b · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="7895dc8d928770a8" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:gpt-j-6b-licensed-as-apache-2.0` / `edge-source:gpt-j-hf-license`
  - Edge: `model:gpt-j-6b --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/EleutherAI/gpt-j-6b/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b72d83c97e346b7a" quote_sha256="8bc7e4828a8a73c2de6349ab963a98557b4b7795e3cc6634413a645e772b383a" --> `edge:gpt-j-6b-trained-on-the-pile` / `edge-source:gpt-j-model-card`
  - Edge: `model:gpt-j-6b --trained_on--> dataset:the-pile`
  - Source URL: https://huggingface.co/EleutherAI/gpt-j-6b/raw/main/README.md
  - Quote: "GPT-J 6B was trained on [the Pile](https://pile.eleuther.ai), a large-scale curated dataset created by [EleutherAI](https://www.eleuther.ai)."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="7e5cf47fb7696a2e" quote_sha256="1b551062927dc44ed2eb284cf08bbfd2cc3b0f78e35585d04fc578107ee42fc1" --> `edge:mistral-7b-instruct-v0.3-developed-by-mistral-ai` / `edge-source:mistral-hf-org`
  - Edge: `model:mistral-7b-instruct-v0.3 --developed_by--> organization:mistral-ai`
  - Source URL: https://huggingface.co/api/models/mistralai/Mistral-7B-Instruct-v0.3
  - Quote: ""author":"mistralai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="deb2d2b35906991d" quote_sha256="922c2caa19ca37f71f34b3605aca12f43013a598ac307450d116cb4fb2fb2611" --> `edge:mistral-7b-instruct-v0.3-hosted-by-hugging-face-hub` / `edge-source:mistral-hf`
  - Edge: `model:mistral-7b-instruct-v0.3 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3
  - Quote: "<title>mistralai/Mistral-7B-Instruct-v0.3 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="a2041b2d5ffd02a0" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:mistral-7b-instruct-v0.3-licensed-as-apache-2.0` / `edge-source:mistral-hf-license`
  - Edge: `model:mistral-7b-instruct-v0.3 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="dab766273be51113" quote_sha256="45b0ac7307148b2609be0cab96dd98bc74b0b6f8e17ed1fd2f0278e0f58d8806" --> `edge:nomic-embed-text-v1.5-developed-by-nomic-ai` / `edge-source:nomic-embed-hf`
  - Edge: `model:nomic-embed-text-v1.5 --developed_by--> organization:nomic-ai`
  - Source URL: https://huggingface.co/api/models/nomic-ai/nomic-embed-text-v1.5
  - Quote: ""author":"nomic-ai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ae8b46f5db2b8005" quote_sha256="0c520a1dcdeb536169cd571a9bb7d4f3a4894956349a5b1f9130f2d46737fd81" --> `edge:nomic-embed-text-v1.5-evaluated-on-mteb` / `edge-source:nomic-embed-model-card`
  - Edge: `model:nomic-embed-text-v1.5 --evaluated_on--> benchmark:mteb`
  - Source URL: https://huggingface.co/nomic-ai/nomic-embed-text-v1.5/raw/main/README.md
  - Quote: "- task: type: STS dataset: type: mteb/stsbenchmark-sts name: MTEB STSBenchmark config: default split: test revision: b0fddb56ed78048fa8b90373c8a3cfc37b684831 metrics: - type: cos_sim_pearson value: 84.22876368947644"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e35ddac79ca147ea" quote_sha256="38eb76b2c5ea68106a94a6d7f58d1164f4888131d8622adcc29d8decf5fd1945" --> `edge:nomic-embed-text-v1.5-hosted-by-hugging-face-hub` / `edge-source:nomic-embed-hf`
  - Edge: `model:nomic-embed-text-v1.5 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/nomic-ai/nomic-embed-text-v1.5
  - Quote: "<title>nomic-ai/nomic-embed-text-v1.5 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="08ff23b0025534a9" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:nomic-embed-text-v1.5-licensed-as-apache-2.0` / `edge-source:nomic-embed-hf-license`
  - Edge: `model:nomic-embed-text-v1.5 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/nomic-ai/nomic-embed-text-v1.5/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="356de88ba330e882" quote_sha256="c87a1d70fc4ae089d8e61643fe99dca55bef42a61bae1f6050c33a1d57e6e194" --> `edge:nomic-embed-text-v1.5-trained-on-nomic-embed-training-data` / `edge-source:nomic-embed-model-card`
  - Edge: `model:nomic-embed-text-v1.5 --trained_on--> dataset:nomic-embed-training-data`
  - Source URL: https://huggingface.co/nomic-ai/nomic-embed-text-v1.5/raw/main/README.md
  - Quote: "We train our embedder using a multi-stage training pipeline. Starting from a long-context [BERT model](https://huggingface.co/nomic-ai/nomic-bert-2048), the first unsupervised contrastive stage trains on a dataset generated from weakly related text pairs, such as question-answer pairs from forums like StackExchange and Quora, title-body pairs from Amazon reviews, and summarizations from news articles."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8d76f3ca20e46611" quote_sha256="83d4e5f76f2b52e3386dddac99ea4d16a366abe37b4623cd3670dadfc2246f07" --> `edge:qwen2.5-7b-instruct-hosted-by-hugging-face-hub` / `edge-source:qwen2.5-hf`
  - Edge: `model:qwen2.5-7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Qwen/Qwen2.5-7B-Instruct
  - Quote: "<title>Qwen/Qwen2.5-7B-Instruct · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="226aa28c5729f3e0" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:qwen2.5-7b-instruct-licensed-as-apache-2.0` / `edge-source:qwen2.5-hf-license`
  - Edge: `model:qwen2.5-7b-instruct --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="98f713ce391934cd" quote_sha256="449ea1b31cdf74a428df1fb8be63353b1beac6730c3c1bcde38cf9890c275877" --> `edge:qwen2.5-7b-instruct-trained-on-qwen2.5-training-corpus` / `edge-source:qwen2.5-model-card`
  - Edge: `model:qwen2.5-7b-instruct --trained_on--> dataset:qwen2.5-training-corpus`
  - Source URL: https://qwenlm.github.io/blog/qwen2.5/
  - Quote: "In terms of <strong>Qwen2.5</strong>, the language models, all models are pretrained on our latest large-scale dataset, encompassing up to <strong>18 trillion</strong> tokens."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="a80395d99a4af193" quote_sha256="a9e39ec0fff6bafcbe1854750ee18319c2b76bd6c3e5a1c4217a39386b3a198c" --> `edge:qwen2.5-coder-7b-instruct-hosted-by-hugging-face-hub` / `edge-source:qwen2.5-coder-hf`
  - Edge: `model:qwen2.5-coder-7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct
  - Quote: "<title>Qwen/Qwen2.5-Coder-7B-Instruct · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="965c4d2249fbeb06" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:qwen2.5-coder-7b-instruct-licensed-as-apache-2.0` / `edge-source:qwen2.5-coder-hf-license`
  - Edge: `model:qwen2.5-coder-7b-instruct --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2143b474bc8cfe3c" quote_sha256="c895f32f4267c8ad7c503790096e97d779c56a025bbfadd13f2a76b31a0e8009" --> `edge:stable-diffusion-xl-base-1.0-developed-by-stability-ai` / `edge-source:sdxl-hf`
  - Edge: `model:stable-diffusion-xl-base-1.0 --developed_by--> organization:stability-ai`
  - Source URL: https://huggingface.co/api/models/stabilityai/stable-diffusion-xl-base-1.0
  - Quote: ""author":"stabilityai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2ee59fef56e03e89" quote_sha256="82344177b44ec79f14de0d1263acdc50f0c99c9dc5fd92a2eabc60e850089927" --> `edge:stable-diffusion-xl-base-1.0-hosted-by-hugging-face-hub` / `edge-source:sdxl-hf`
  - Edge: `model:stable-diffusion-xl-base-1.0 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0
  - Quote: "<title>stabilityai/stable-diffusion-xl-base-1.0 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5c4f99a038b3e394" quote_sha256="4988bc2ef0aac5336f618af1c802af5661550dbb2de85237f824a77209535dc2" --> `edge:stable-diffusion-xl-base-1.0-licensed-as-openrail-plus-plus` / `edge-source:sdxl-hf-license`
  - Edge: `model:stable-diffusion-xl-base-1.0 --licensed_as--> license:openrail-plus-plus`
  - Source URL: https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/raw/main/README.md
  - Quote: "license: openrail++"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="229a9b9801254912" quote_sha256="01a8efc9d8e61715538fa624c2a9ea2097a775e613abeec7e8ddcd8e15a0fedf" --> `edge:starcoder2-3b-developed-by-bigcode` / `edge-source:starcoder2-hf`
  - Edge: `model:starcoder2-3b --developed_by--> organization:bigcode`
  - Source URL: https://huggingface.co/api/models/bigcode/starcoder2-3b
  - Quote: ""author":"bigcode""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2b32e481a52a69a7" quote_sha256="e851222b6643df79ca127f5829c6453ac0042a5cc96b91f4c2d073c1014e0f12" --> `edge:starcoder2-3b-evaluated-on-humaneval` / `edge-source:starcoder2-model-card`
  - Edge: `model:starcoder2-3b --evaluated_on--> benchmark:humaneval`
  - Source URL: https://huggingface.co/bigcode/starcoder2-3b/raw/main/README.md
  - Quote: "- task: type: text-generation dataset: name: HumanEval type: humaneval metrics: - type: pass@1 value: 31.7"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="006c61aa00062be2" quote_sha256="e7d10df86104edd8a44061e9b7abb0178594f124fc8a6fb1240c00d4632d5134" --> `edge:starcoder2-3b-hosted-by-hugging-face-hub` / `edge-source:starcoder2-hf`
  - Edge: `model:starcoder2-3b --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/bigcode/starcoder2-3b
  - Quote: "<title>bigcode/starcoder2-3b · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e9190bc37cb6b1b0" quote_sha256="4cab494d692549a70fd861b3f2e677c95c7a4f8aa7e36cbb423fbc8d3d02e1ff" --> `edge:starcoder2-3b-licensed-as-bigcode-openrail-m` / `edge-source:starcoder2-hf-license`
  - Edge: `model:starcoder2-3b --licensed_as--> license:bigcode-openrail-m`
  - Source URL: https://huggingface.co/bigcode/starcoder2-3b/raw/main/README.md
  - Quote: "The model is licensed under the BigCode OpenRAIL-M v1 license agreement. You can find the full agreement [here](https://huggingface.co/spaces/bigcode/bigcode-model-license-agreement)."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8cfeb80a46da9751" quote_sha256="48e43a3626905ec105b3fd6a519c6772e7549626ea615a01d348a298ad880d7d" --> `edge:starcoder2-3b-trained-on-the-stack-v2` / `edge-source:starcoder2-model-card`
  - Edge: `model:starcoder2-3b --trained_on--> dataset:the-stack-v2`
  - Source URL: https://huggingface.co/bigcode/starcoder2-3b/raw/main/README.md
  - Quote: "StarCoder2-3B model is a 3B parameter model trained on 17 programming languages from [The Stack v2](https://huggingface.co/datasets/bigcode/the-stack-v2-train), with opt-out requests excluded."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="621289682eea1bfc" quote_sha256="d267b29ce44a9ad368a9525b74c28f1accad4685128d2190a9d0c2ff1901009e" --> `edge:whisper-large-v3-developed-by-openai` / `edge-source:whisper-hf`
  - Edge: `model:whisper-large-v3 --developed_by--> organization:openai`
  - Source URL: https://huggingface.co/api/models/openai/whisper-large-v3
  - Quote: ""author":"openai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d0adb746e066b724" quote_sha256="82439793a4f724a5f0b86f767a9a810abc4ca49bc752827f3045b00ef5c10198" --> `edge:whisper-large-v3-hosted-by-hugging-face-hub` / `edge-source:whisper-hf`
  - Edge: `model:whisper-large-v3 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/openai/whisper-large-v3
  - Quote: "<title>openai/whisper-large-v3 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="91ef6713c9e606a9" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:whisper-large-v3-licensed-as-apache-2.0` / `edge-source:whisper-hf-license`
  - Edge: `model:whisper-large-v3 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/openai/whisper-large-v3/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="99291ef95a931033" quote_sha256="cfbf9af9218907b93b34163435287417d8a3e9c2593aa59e48dcedbe730bac78" --> `edge:whisper-large-v3-trained-on-whisper-web-audio` / `edge-source:whisper-repo`
  - Edge: `model:whisper-large-v3 --trained_on--> dataset:whisper-web-audio`
  - Source URL: https://huggingface.co/openai/whisper-large-v3/raw/main/README.md
  - Quote: "The large-v3 checkpoint is trained on 1 million hours of weakly labeled audio and 4 million hours of pseudo-labeled audio collected using Whisper large-v2."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="cf17197a4a8f15ce" quote_sha256="95d48c8021fa9ad2af8133c1ec8f07ecd167f09374e19479e94a56da1d15b2a9" --> `edge:whisper-large-v3-trained-with-pytorch` / `edge-source:whisper-repo`
  - Edge: `model:whisper-large-v3 --trained_with--> software:pytorch`
  - Source URL: https://raw.githubusercontent.com/openai/whisper/main/README.md
  - Quote: "We used Python 3.9.9 and [PyTorch](https://pytorch.org/) 1.10.1 to train and test our models, but the codebase is expected to be compatible with Python 3.8-3.11 and recent PyTorch versions."
  - Manual verification: quote directly supports the edge relationship.


## data/edges/required-coverage.json

- [x] <!-- edge-quote-verification key="6db2475200d54146" quote_sha256="a0584e1bc3b61c46141330e922332042a604a262fa07447ceb5fa55750f09574" --> `edge:required:benchmark-humaneval:licensed_as:license-mit` / `generated:benchmark-humaneval:licensed_as`
  - Edge: `benchmark:humaneval --licensed_as--> license:mit`
  - Source URL: https://api.github.com/repos/openai/human-eval
  - Quote: ""name": "MIT License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0e2b0a706491ae34" quote_sha256="7f0c5a83f94cccb0d4b29e81fc1b8340675ea45193cf5989919e4f16b4903126" --> `edge:required:benchmark-librispeech-asr:licensed_as:license-cc-by-4.0` / `generated:benchmark-librispeech-asr:licensed_as`
  - Edge: `benchmark:librispeech-asr --licensed_as--> license:cc-by-4.0`
  - Source URL: https://www.openslr.org/12
  - Quote: "License: CC BY 4.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6b69f19512ea49bf" quote_sha256="5c806741eeb888a70fd23846bc18f09e6dc0d061ea1dce137c1f46ec3122324e" --> `edge:required:benchmark-mteb:developed_by:organization-embeddings-benchmark` / `generated:benchmark-mteb:developed_by`
  - Edge: `benchmark:mteb --developed_by--> organization:embeddings-benchmark`
  - Source URL: https://api.github.com/repos/embeddings-benchmark/mteb
  - Quote: ""full_name": "embeddings-benchmark/mteb","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0c3037a9a6ebe4f2" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:benchmark-mteb:licensed_as:license-apache-2.0` / `generated:benchmark-mteb:licensed_as`
  - Edge: `benchmark:mteb --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/embeddings-benchmark/mteb
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="25415dfd5464c14b" quote_sha256="a0584e1bc3b61c46141330e922332042a604a262fa07447ceb5fa55750f09574" --> `edge:required:benchmark-swe-bench:licensed_as:license-mit` / `generated:benchmark-swe-bench:licensed_as`
  - Edge: `benchmark:swe-bench --licensed_as--> license:mit`
  - Source URL: https://api.github.com/repos/SWE-bench/SWE-bench
  - Quote: ""name": "MIT License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="82749927db2084f8" quote_sha256="fa87ecebf52def30fa07850b3704313166c208f3696dd9be5cdaaba7ad3ff009" --> `edge:required:benchmark-text-to-image-quality:developed_by:organization-artificialanalysis` / `generated:benchmark-text-to-image-quality:developed_by`
  - Edge: `benchmark:text-to-image-quality --developed_by--> organization:artificialanalysis`
  - Source URL: https://huggingface.co/api/spaces/ArtificialAnalysis/Text-to-Image-Leaderboard
  - Quote: ""author":"ArtificialAnalysis""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d439a1569367dec0" quote_sha256="e726c2e6673701d9786ec5333823fcbe707382e36047197b90ec20206a45bc8c" --> `edge:required:dataset-whisper-web-audio:developed_by:organization-openai` / `generated:dataset-whisper-web-audio:developed_by`
  - Edge: `dataset:whisper-web-audio --developed_by--> organization:openai`
  - Source URL: https://api.github.com/repos/openai/whisper
  - Quote: ""full_name": "openai/whisper","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d879dd3436596d51" quote_sha256="be735d8e60c98e27d856fd9db38ad12cd65838154c2488e9463b5ac02631d12e" --> `edge:required:model-all-minilm-l6-v2:developed_by:organization-sentence-transformers` / `generated:model-all-minilm-l6-v2:developed_by`
  - Edge: `model:all-minilm-l6-v2 --developed_by--> organization:sentence-transformers`
  - Source URL: https://huggingface.co/api/models/sentence-transformers/all-MiniLM-L6-v2
  - Quote: ""author":"sentence-transformers""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bed5edcce3b116e5" quote_sha256="94d2248eb43840fa6df39e803d8d503390ee843265d7ff4bffa22d73278a5555" --> `edge:required:model-all-minilm-l6-v2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-all-minilm-l6-v2:hosted_by`
  - Edge: `model:all-minilm-l6-v2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
  - Quote: "<title>sentence-transformers/all-MiniLM-L6-v2 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="70d5bb9bf857c022" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-all-minilm-l6-v2:licensed_as:license-apache-2.0` / `generated:model-all-minilm-l6-v2:licensed_as`
  - Edge: `model:all-minilm-l6-v2 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e4e58517cfa8be36" quote_sha256="6c8aae50e6ad3e211d603489bb69c06d72d2a1b8726639ced22acf35d1d42fc9" --> `edge:required:model-bark-small:developed_by:organization-suno` / `generated:model-bark-small:developed_by`
  - Edge: `model:bark-small --developed_by--> organization:suno`
  - Source URL: https://huggingface.co/api/models/suno/bark-small
  - Quote: ""author":"suno""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e376a1ccc52a5b71" quote_sha256="af42fb776dcea796bb37d49272a0282b1f6377d0a26b7534553c8787895f1388" --> `edge:required:model-bark-small:hosted_by:infrastructure-hugging-face-hub` / `generated:model-bark-small:hosted_by`
  - Edge: `model:bark-small --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/suno/bark-small
  - Quote: "<title>suno/bark-small · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="3fc81a65bf63ad27" quote_sha256="dc5241953241b18e072cf68220fe24fbae17d6cf856bab08b38b4f07865829d2" --> `edge:required:model-bark-small:licensed_as:license-mit` / `generated:model-bark-small:licensed_as`
  - Edge: `model:bark-small --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/suno/bark-small/raw/main/README.md
  - Quote: "Bark is licensed under the MIT License, meaning it's available for commercial use."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fff3803bb76bafa2" quote_sha256="1378287a111f22022b1ea05a0308a1038681f8caa435a6139b9006b1cecc49d1" --> `edge:required:model-bge-base-en-v1.5:developed_by:organization-baai` / `generated:model-bge-base-en-v1.5:developed_by`
  - Edge: `model:bge-base-en-v1.5 --developed_by--> organization:baai`
  - Source URL: https://huggingface.co/api/models/BAAI/bge-base-en-v1.5
  - Quote: ""author":"BAAI""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ce52247ef455b6cf" quote_sha256="e0074b3e860498bd86e8e803cde8005f41960dc77483397f4eecc04e73f53920" --> `edge:required:model-bge-base-en-v1.5:hosted_by:infrastructure-hugging-face-hub` / `generated:model-bge-base-en-v1.5:hosted_by`
  - Edge: `model:bge-base-en-v1.5 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/BAAI/bge-base-en-v1.5
  - Quote: "<title>BAAI/bge-base-en-v1.5 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="1fd160b236f39cac" quote_sha256="b51914c64134e9930ed03e057c4a31c6a9e1be726a44d8ff4d46effe77f32ae7" --> `edge:required:model-bge-base-en-v1.5:licensed_as:license-mit` / `generated:model-bge-base-en-v1.5:licensed_as`
  - Edge: `model:bge-base-en-v1.5 --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/BAAI/bge-base-en-v1.5/raw/main/README.md
  - Quote: "FlagEmbedding is licensed under the MIT License. The released models can be used for commercial purposes free of charge."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="52c68f591d5319ad" quote_sha256="1378287a111f22022b1ea05a0308a1038681f8caa435a6139b9006b1cecc49d1" --> `edge:required:model-bge-large-en-v1.5:developed_by:organization-baai` / `generated:model-bge-large-en-v1.5:developed_by`
  - Edge: `model:bge-large-en-v1.5 --developed_by--> organization:baai`
  - Source URL: https://huggingface.co/api/models/BAAI/bge-large-en-v1.5
  - Quote: ""author":"BAAI""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e007a34707152006" quote_sha256="b333fcb6544329538a88a748e4ed9e646bc156ed8045d90a95a9b89c209003de" --> `edge:required:model-bge-large-en-v1.5:hosted_by:infrastructure-hugging-face-hub` / `generated:model-bge-large-en-v1.5:hosted_by`
  - Edge: `model:bge-large-en-v1.5 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/BAAI/bge-large-en-v1.5
  - Quote: "<title>BAAI/bge-large-en-v1.5 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fd62f6cb11aa2afd" quote_sha256="b51914c64134e9930ed03e057c4a31c6a9e1be726a44d8ff4d46effe77f32ae7" --> `edge:required:model-bge-large-en-v1.5:licensed_as:license-mit` / `generated:model-bge-large-en-v1.5:licensed_as`
  - Edge: `model:bge-large-en-v1.5 --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/BAAI/bge-large-en-v1.5/raw/main/README.md
  - Quote: "FlagEmbedding is licensed under the MIT License. The released models can be used for commercial purposes free of charge."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="91917d5b6fbb9bb8" quote_sha256="1378287a111f22022b1ea05a0308a1038681f8caa435a6139b9006b1cecc49d1" --> `edge:required:model-bge-reranker-large:developed_by:organization-baai` / `generated:model-bge-reranker-large:developed_by`
  - Edge: `model:bge-reranker-large --developed_by--> organization:baai`
  - Source URL: https://huggingface.co/api/models/BAAI/bge-reranker-large
  - Quote: ""author":"BAAI""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fa49001bc263b015" quote_sha256="5710ce12078d258393b9923a42a55d160b1ab91b6b0697c95323261148a1e989" --> `edge:required:model-bge-reranker-large:hosted_by:infrastructure-hugging-face-hub` / `generated:model-bge-reranker-large:hosted_by`
  - Edge: `model:bge-reranker-large --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/BAAI/bge-reranker-large
  - Quote: "<title>BAAI/bge-reranker-large · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ef9119ac101d72e9" quote_sha256="b51914c64134e9930ed03e057c4a31c6a9e1be726a44d8ff4d46effe77f32ae7" --> `edge:required:model-bge-reranker-large:licensed_as:license-mit` / `generated:model-bge-reranker-large:licensed_as`
  - Edge: `model:bge-reranker-large --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/BAAI/bge-reranker-large/raw/main/README.md
  - Quote: "FlagEmbedding is licensed under the MIT License. The released models can be used for commercial purposes free of charge."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="32e51794012136a1" quote_sha256="3aa9d9eade1fd432d73fe31142e199a75dc7bfc6c2d1374d4b6c80a53bf206bd" --> `edge:required:model-codegemma-7b-it:developed_by:organization-google` / `generated:model-codegemma-7b-it:developed_by`
  - Edge: `model:codegemma-7b-it --developed_by--> organization:google`
  - Source URL: https://huggingface.co/api/models/google/codegemma-7b-it
  - Quote: ""author":"google""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="349c02ac06c20ace" quote_sha256="1c385f9cada2ecd205b525dfbc6305ea370706483394e146c5748b0be9bd2d6f" --> `edge:required:model-codegemma-7b-it:hosted_by:infrastructure-hugging-face-hub` / `generated:model-codegemma-7b-it:hosted_by`
  - Edge: `model:codegemma-7b-it --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/google/codegemma-7b-it
  - Quote: "<title>google/codegemma-7b-it · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8cd4c2eb51be1031" quote_sha256="29806d096d525bb5c0d81a85983ff1a637a6f02beb5ae5c77ddf75958aad9eee" --> `edge:required:model-codegen-350m-mono:developed_by:organization-salesforce` / `generated:model-codegen-350m-mono:developed_by`
  - Edge: `model:codegen-350m-mono --developed_by--> organization:salesforce`
  - Source URL: https://huggingface.co/api/models/Salesforce/codegen-350M-mono
  - Quote: ""author":"Salesforce""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="250af6bbfe04eb65" quote_sha256="65db5ee9297b97aa976a42e9ca05bdaf479ebb091bd85eb7e2b00cd23c5835bc" --> `edge:required:model-codegen-350m-mono:hosted_by:infrastructure-hugging-face-hub` / `generated:model-codegen-350m-mono:hosted_by`
  - Edge: `model:codegen-350m-mono --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Salesforce/codegen-350M-mono
  - Quote: "<title>Salesforce/codegen-350M-mono · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="63e6d4086e1140f3" quote_sha256="0aaccbc2c324de9763bc816ef259f666f5a09856e2dbe91a83830fadb87771e6" --> `edge:required:model-codegen-350m-mono:licensed_as:license-bsd-3-clause` / `generated:model-codegen-350m-mono:licensed_as`
  - Edge: `model:codegen-350m-mono --licensed_as--> license:bsd-3-clause`
  - Source URL: https://huggingface.co/Salesforce/codegen-350M-mono/raw/main/README.md
  - Quote: "license: bsd-3-clause"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d0dc007962a7b3c3" quote_sha256="f8d8426d4781ee6388464da1fe2ef0fbf8df534ba9b276262c9cddcc1dcd02a5" --> `edge:required:model-codellama-7b-instruct:developed_by:organization-codellama` / `generated:model-codellama-7b-instruct:developed_by`
  - Edge: `model:codellama-7b-instruct --developed_by--> organization:codellama`
  - Source URL: https://huggingface.co/api/models/codellama/CodeLlama-7b-Instruct-hf
  - Quote: ""author":"codellama""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="069ab53afc6cf42f" quote_sha256="d700fd6d90a336e67c1453e9dae155c82feef0570fe220724537a2999becce8c" --> `edge:required:model-codellama-7b-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-codellama-7b-instruct:hosted_by`
  - Edge: `model:codellama-7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf
  - Quote: "<title>codellama/CodeLlama-7b-Instruct-hf · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="02c13fe88e4214db" quote_sha256="e48c9f794cdf663dc5b87ef273bfed55f3efe311c510651eaba79eb0d9739585" --> `edge:required:model-codellama-7b-instruct:licensed_as:license-other-composite` / `generated:model-codellama-7b-instruct:licensed_as`
  - Edge: `model:codellama-7b-instruct --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf/raw/main/README.md
  - Quote: "license: llama2"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="99ee753677c844d3" quote_sha256="db4983bb60a0c7a6908bc5c11b603ed963f89cba5f668e6b21629cefff19a385" --> `edge:required:model-deepseek-coder-6.7b-instruct:developed_by:organization-deepseek-ai` / `generated:model-deepseek-coder-6.7b-instruct:developed_by`
  - Edge: `model:deepseek-coder-6.7b-instruct --developed_by--> organization:deepseek-ai`
  - Source URL: https://huggingface.co/api/models/deepseek-ai/deepseek-coder-6.7b-instruct
  - Quote: ""author":"deepseek-ai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0ccd24f6501d1e5c" quote_sha256="2e0e9271dd36481cbcc773cfa848561089ba1e2c6b85e7a5ea448d7b36356de3" --> `edge:required:model-deepseek-coder-6.7b-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-deepseek-coder-6.7b-instruct:hosted_by`
  - Edge: `model:deepseek-coder-6.7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct
  - Quote: "<title>deepseek-ai/deepseek-coder-6.7b-instruct · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e5a25247056899ea" quote_sha256="657db19f6d074a858352cb0513a683561842b5e982309da64bc5c51260c393fd" --> `edge:required:model-deepseek-coder-6.7b-instruct:licensed_as:license-other-composite` / `generated:model-deepseek-coder-6.7b-instruct:licensed_as`
  - Edge: `model:deepseek-coder-6.7b-instruct --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct/raw/main/README.md
  - Quote: "This code repository is licensed under the MIT License. The use of DeepSeek Coder models is subject to the Model License. DeepSeek Coder supports commercial use."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="af324c1677a19640" quote_sha256="db4983bb60a0c7a6908bc5c11b603ed963f89cba5f668e6b21629cefff19a385" --> `edge:required:model-deepseek-r1-distill-qwen-7b:developed_by:organization-deepseek-ai` / `generated:model-deepseek-r1-distill-qwen-7b:developed_by`
  - Edge: `model:deepseek-r1-distill-qwen-7b --developed_by--> organization:deepseek-ai`
  - Source URL: https://huggingface.co/api/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B
  - Quote: ""author":"deepseek-ai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="3dd84f8cc6870cde" quote_sha256="e80986be8e639fafe55957fa72135ee194ec18e08c5dfcbcbba38e6e1321a189" --> `edge:required:model-deepseek-r1-distill-qwen-7b:hosted_by:infrastructure-hugging-face-hub` / `generated:model-deepseek-r1-distill-qwen-7b:hosted_by`
  - Edge: `model:deepseek-r1-distill-qwen-7b --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B
  - Quote: "<title>deepseek-ai/DeepSeek-R1-Distill-Qwen-7B · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c87277a2e50a3751" quote_sha256="204d0bce1ef327f348bccd1f6efe3397d28f54009edcb813a141198a262bd528" --> `edge:required:model-deepseek-r1-distill-qwen-7b:licensed_as:license-mit` / `generated:model-deepseek-r1-distill-qwen-7b:licensed_as`
  - Edge: `model:deepseek-r1-distill-qwen-7b --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B/raw/main/README.md
  - Quote: "license: mit"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d5f8a0d5b519ecb9" quote_sha256="0dfa22b58fa893ff3b6b202290b8221b33706f9d614b218c9a20f5c94850d70a" --> `edge:required:model-distil-large-v3:developed_by:organization-distil-whisper` / `generated:model-distil-large-v3:developed_by`
  - Edge: `model:distil-large-v3 --developed_by--> organization:distil-whisper`
  - Source URL: https://huggingface.co/api/models/distil-whisper/distil-large-v3
  - Quote: ""author":"distil-whisper""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c99ea4ad71419b51" quote_sha256="44a04a7a4570d13713aeaf280953c021936695c43c4c8ba8a7c514a69d312ca5" --> `edge:required:model-distil-large-v3:hosted_by:infrastructure-hugging-face-hub` / `generated:model-distil-large-v3:hosted_by`
  - Edge: `model:distil-large-v3 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/distil-whisper/distil-large-v3
  - Quote: "<title>distil-whisper/distil-large-v3 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="cdc8f3e77b95006b" quote_sha256="68d7af8b72e70bfda87567798a54b0743b9a51d483cece48f3ea6d76d4d9fa2d" --> `edge:required:model-distil-large-v3:licensed_as:license-mit` / `generated:model-distil-large-v3:licensed_as`
  - Edge: `model:distil-large-v3 --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/distil-whisper/distil-large-v3/raw/main/README.md
  - Quote: "Distil-Whisper inherits the MIT license from OpenAI's Whisper model."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5da856dcdfa5b634" quote_sha256="7cc020b619003ab37fc46fa011ec90444c8ab5d295fcba887fdf62f36e8228ad" --> `edge:required:model-dreamshaper-8:developed_by:organization-lykon` / `generated:model-dreamshaper-8:developed_by`
  - Edge: `model:dreamshaper-8 --developed_by--> organization:lykon`
  - Source URL: https://huggingface.co/api/models/Lykon/dreamshaper-8
  - Quote: ""author":"Lykon""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0b3500968901022b" quote_sha256="0423c2639bf35b203e389e82fd6224b754de88763824f8a54c7bcddf0442f10c" --> `edge:required:model-dreamshaper-8:hosted_by:infrastructure-hugging-face-hub` / `generated:model-dreamshaper-8:hosted_by`
  - Edge: `model:dreamshaper-8 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Lykon/dreamshaper-8
  - Quote: "<title>Lykon/dreamshaper-8 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2e1ad70f9b789472" quote_sha256="1c24c5502ef16a4f99dd7560a4156dad775d3d890e5b2018e42cd7ab7745a91c" --> `edge:required:model-dreamshaper-8:licensed_as:license-other-composite` / `generated:model-dreamshaper-8:licensed_as`
  - Edge: `model:dreamshaper-8 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/Lykon/dreamshaper-8/raw/main/README.md
  - Quote: "license: creativeml-openrail-m"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="82ed3bae5c815298" quote_sha256="955dccf67d47df68885d02addfb1a3d5308d69593cc556784bdba57e76063833" --> `edge:required:model-e5-large-v2:developed_by:organization-intfloat` / `generated:model-e5-large-v2:developed_by`
  - Edge: `model:e5-large-v2 --developed_by--> organization:intfloat`
  - Source URL: https://huggingface.co/api/models/intfloat/e5-large-v2
  - Quote: ""author":"intfloat""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="7201904bfb1ac2af" quote_sha256="af019c39787836e59157870d20ba50390fc4d58c0f51278d690bf581d29229ab" --> `edge:required:model-e5-large-v2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-e5-large-v2:hosted_by`
  - Edge: `model:e5-large-v2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/intfloat/e5-large-v2
  - Quote: "<title>intfloat/e5-large-v2 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="01984980d7b3a7d4" quote_sha256="204d0bce1ef327f348bccd1f6efe3397d28f54009edcb813a141198a262bd528" --> `edge:required:model-e5-large-v2:licensed_as:license-mit` / `generated:model-e5-large-v2:licensed_as`
  - Edge: `model:e5-large-v2 --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/intfloat/e5-large-v2/raw/main/README.md
  - Quote: "license: mit"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c66f9df610e0cfa2" quote_sha256="4e13e02d05e40f4a425babc75babc72cacccd7b4ccf8c45266604730467478d9" --> `edge:required:model-falcon-7b-instruct:developed_by:organization-tiiuae` / `generated:model-falcon-7b-instruct:developed_by`
  - Edge: `model:falcon-7b-instruct --developed_by--> organization:tiiuae`
  - Source URL: https://huggingface.co/api/models/tiiuae/falcon-7b-instruct
  - Quote: ""author":"tiiuae""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5b9d87fd1041f0ab" quote_sha256="bb95409c2421c539be524bb3480d7c410e21a48c1fc2c8303d2221106f588d8c" --> `edge:required:model-falcon-7b-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-falcon-7b-instruct:hosted_by`
  - Edge: `model:falcon-7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/tiiuae/falcon-7b-instruct
  - Quote: "<title>tiiuae/falcon-7b-instruct · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="a48e97cd8a7fada5" quote_sha256="c11ab48c2c690f7bc45e3c92909849655b9c17a68f3bc6749f1aa1823e0f6f3c" --> `edge:required:model-falcon-7b-instruct:licensed_as:license-apache-2.0` / `generated:model-falcon-7b-instruct:licensed_as`
  - Edge: `model:falcon-7b-instruct --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/tiiuae/falcon-7b-instruct/raw/main/README.md
  - Quote: "Falcon-7B-Instruct is made available under the Apache 2.0 license."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f1535747338fa02b" quote_sha256="66c408560a6178cb582fd118ee31b753d744a21be9fb65d4dc2a41d433f966b2" --> `edge:required:model-flux.1-dev:developed_by:organization-black-forest-labs` / `generated:model-flux.1-dev:developed_by`
  - Edge: `model:flux.1-dev --developed_by--> organization:black-forest-labs`
  - Source URL: https://huggingface.co/api/models/black-forest-labs/FLUX.1-dev
  - Quote: ""author":"black-forest-labs""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b78b83e3f3c98683" quote_sha256="25529270595f350c9a4b603cc70fadc1bc9481ddb1c85b79de774f6efa081b28" --> `edge:required:model-flux.1-dev:hosted_by:infrastructure-hugging-face-hub` / `generated:model-flux.1-dev:hosted_by`
  - Edge: `model:flux.1-dev --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/black-forest-labs/FLUX.1-dev
  - Quote: "<title>black-forest-labs/FLUX.1-dev · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="4a901cf52a554bcf" quote_sha256="66c408560a6178cb582fd118ee31b753d744a21be9fb65d4dc2a41d433f966b2" --> `edge:required:model-flux.1-schnell:developed_by:organization-black-forest-labs` / `generated:model-flux.1-schnell:developed_by`
  - Edge: `model:flux.1-schnell --developed_by--> organization:black-forest-labs`
  - Source URL: https://huggingface.co/api/models/black-forest-labs/FLUX.1-schnell
  - Quote: ""author":"black-forest-labs""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bde630a561e3d687" quote_sha256="5885dad41c1cd86508105de3be227d6f80c825a124fe0ef22d17cf08f95d21cd" --> `edge:required:model-flux.1-schnell:hosted_by:infrastructure-hugging-face-hub` / `generated:model-flux.1-schnell:hosted_by`
  - Edge: `model:flux.1-schnell --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/black-forest-labs/FLUX.1-schnell
  - Quote: "<title>black-forest-labs/FLUX.1-schnell · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f284f2f5e0f0df47" quote_sha256="3aa9d9eade1fd432d73fe31142e199a75dc7bfc6c2d1374d4b6c80a53bf206bd" --> `edge:required:model-gemma-2-9b-it:developed_by:organization-google` / `generated:model-gemma-2-9b-it:developed_by`
  - Edge: `model:gemma-2-9b-it --developed_by--> organization:google`
  - Source URL: https://huggingface.co/api/models/google/gemma-2-9b-it
  - Quote: ""author":"google""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e1e829c5d4720679" quote_sha256="1532b186ff18806bcac295274d620f54c48f6cf7346de90b1f450ac91f4887c8" --> `edge:required:model-gemma-2-9b-it:hosted_by:infrastructure-hugging-face-hub` / `generated:model-gemma-2-9b-it:hosted_by`
  - Edge: `model:gemma-2-9b-it --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/google/gemma-2-9b-it
  - Quote: "<title>google/gemma-2-9b-it · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="9d183f1a3056fbbd" quote_sha256="6592a5cc60c2d598f49021c9d470e138613e16044906bec5ad31fec94d158fd5" --> `edge:required:model-granite-8b-code-instruct:developed_by:organization-ibm-granite` / `generated:model-granite-8b-code-instruct:developed_by`
  - Edge: `model:granite-8b-code-instruct --developed_by--> organization:ibm-granite`
  - Source URL: https://huggingface.co/api/models/ibm-granite/granite-8b-code-instruct
  - Quote: ""author":"ibm-granite""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c93800b3dab39efc" quote_sha256="a8eda4719502e1aa62942706d69a0f9fc0901d4fbaa0a2e8f443e9f27c36d97b" --> `edge:required:model-granite-8b-code-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-granite-8b-code-instruct:hosted_by`
  - Edge: `model:granite-8b-code-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/ibm-granite/granite-8b-code-instruct
  - Quote: "<title>ibm-granite/granite-8b-code-instruct · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="007dd13adcd6af1b" quote_sha256="2976810ede43a47b64e1173c167683b89fa95ac3bd36d66879948d0359e6117d" --> `edge:required:model-granite-8b-code-instruct:licensed_as:license-apache-2.0` / `generated:model-granite-8b-code-instruct:licensed_as`
  - Edge: `model:granite-8b-code-instruct --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/ibm-granite/granite-8b-code-instruct/raw/main/README.md
  - Quote: "- **Developers:** IBM Research - **GitHub Repository:** ibm-granite/granite-code-models - **Paper:** Granite Code Models: A Family of Open Foundation Models for Code Intelligence - **Release Date**: May 6th, 2024 - **License:** Apache 2.0."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="56fa4af375a7a6d5" quote_sha256="de19d37760a9fb6f9a68f85c01c45899df0a2c542803f4cecfdc833d5ca6f2a7" --> `edge:required:model-gte-large-en-v1.5:developed_by:organization-alibaba-nlp` / `generated:model-gte-large-en-v1.5:developed_by`
  - Edge: `model:gte-large-en-v1.5 --developed_by--> organization:alibaba-nlp`
  - Source URL: https://huggingface.co/api/models/Alibaba-NLP/gte-large-en-v1.5
  - Quote: ""author":"Alibaba-NLP""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fcf1c805b73091b2" quote_sha256="b96d060594a43aecf7cccf5c5de8c20102de15993f0ddd56badf560c043743dd" --> `edge:required:model-gte-large-en-v1.5:hosted_by:infrastructure-hugging-face-hub` / `generated:model-gte-large-en-v1.5:hosted_by`
  - Edge: `model:gte-large-en-v1.5 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Alibaba-NLP/gte-large-en-v1.5
  - Quote: "<title>Alibaba-NLP/gte-large-en-v1.5 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0cbf094bd4673de0" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-gte-large-en-v1.5:licensed_as:license-apache-2.0` / `generated:model-gte-large-en-v1.5:licensed_as`
  - Edge: `model:gte-large-en-v1.5 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/Alibaba-NLP/gte-large-en-v1.5/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="787ded5a0fd65b4d" quote_sha256="bd277f0bd3b0a956251161e0a423783aea499293dbfcaa4cc0bfd8fed4bb3cb4" --> `edge:required:model-hunyuan-dit-v1.2:developed_by:organization-tencent-hunyuan` / `generated:model-hunyuan-dit-v1.2:developed_by`
  - Edge: `model:hunyuan-dit-v1.2 --developed_by--> organization:tencent-hunyuan`
  - Source URL: https://huggingface.co/api/models/Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers
  - Quote: ""author":"Tencent-Hunyuan""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e14ec77b22fb2cb9" quote_sha256="9b09a7319c4455b6c7ac3d07647cdef3e7323c22f529738963fce84d765f5953" --> `edge:required:model-hunyuan-dit-v1.2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-hunyuan-dit-v1.2:hosted_by`
  - Edge: `model:hunyuan-dit-v1.2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers
  - Quote: "<title>Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0d2081eb14a8d555" quote_sha256="ddb5b36037340937b89a5a7a20f097444add903110b92b2e33f1215a065e7540" --> `edge:required:model-hunyuan-dit-v1.2:licensed_as:license-other-composite` / `generated:model-hunyuan-dit-v1.2:licensed_as`
  - Edge: `model:hunyuan-dit-v1.2 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers/raw/main/README.md
  - Quote: "license_name: tencent-hunyuan-community"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2f432661d3b20c0b" quote_sha256="909a7626a531b598a3342b13c75ef105f333250961bbce104f6d8cf53031607c" --> `edge:required:model-jina-embeddings-v3:developed_by:organization-jinaai` / `generated:model-jina-embeddings-v3:developed_by`
  - Edge: `model:jina-embeddings-v3 --developed_by--> organization:jinaai`
  - Source URL: https://huggingface.co/api/models/jinaai/jina-embeddings-v3
  - Quote: ""author":"jinaai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fc09d0727a7ff7d6" quote_sha256="f8da8a7ab2fde9825fd921dc1332b1977a02f4759d94adfa99a51d1180b95e74" --> `edge:required:model-jina-embeddings-v3:hosted_by:infrastructure-hugging-face-hub` / `generated:model-jina-embeddings-v3:hosted_by`
  - Edge: `model:jina-embeddings-v3 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/jinaai/jina-embeddings-v3
  - Quote: "<title>jinaai/jina-embeddings-v3 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b2e3d8fc88a7c8e8" quote_sha256="5227c4df03694e57b6d36cec811952117a66c40c944088ff14c0f60c815522c2" --> `edge:required:model-jina-embeddings-v3:licensed_as:license-other-composite` / `generated:model-jina-embeddings-v3:licensed_as`
  - Edge: `model:jina-embeddings-v3 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/jinaai/jina-embeddings-v3/raw/main/README.md
  - Quote: "`jina-embeddings-v3` is listed on AWS & Azure. If you need to use it beyond those platforms or on-premises within your company, note that the models is licensed under CC BY-NC 4.0. For commercial usage inquiries, feel free to contact us."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="978d6e6ba5a8052f" quote_sha256="92cb4db2422dd6a0dbefe05a47ebc57f86ee679779c7d0bea2d518ece314e4ea" --> `edge:required:model-kandinsky-2-2-decoder:developed_by:organization-kandinsky-community` / `generated:model-kandinsky-2-2-decoder:developed_by`
  - Edge: `model:kandinsky-2-2-decoder --developed_by--> organization:kandinsky-community`
  - Source URL: https://huggingface.co/api/models/kandinsky-community/kandinsky-2-2-decoder
  - Quote: ""author":"kandinsky-community""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ad9cea9fce01b6d4" quote_sha256="bbd7f14931e736317e16a9941f2ced71d1c5e274a211e0ec2fe86c884b8f8eb1" --> `edge:required:model-kandinsky-2-2-decoder:hosted_by:infrastructure-hugging-face-hub` / `generated:model-kandinsky-2-2-decoder:hosted_by`
  - Edge: `model:kandinsky-2-2-decoder --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/kandinsky-community/kandinsky-2-2-decoder
  - Quote: "<title>kandinsky-community/kandinsky-2-2-decoder · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8532f9a639b2fce8" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-kandinsky-2-2-decoder:licensed_as:license-apache-2.0` / `generated:model-kandinsky-2-2-decoder:licensed_as`
  - Edge: `model:kandinsky-2-2-decoder --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/kandinsky-community/kandinsky-2-2-decoder/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="a33fcdb10979869d" quote_sha256="b1c5ee80168d7ae0b1b08f766f9857fb68d0201f397f9267b95421b23f3c6662" --> `edge:required:model-llama-3.1-8b-instruct:developed_by:organization-meta-llama` / `generated:model-llama-3.1-8b-instruct:developed_by`
  - Edge: `model:llama-3.1-8b-instruct --developed_by--> organization:meta-llama`
  - Source URL: https://huggingface.co/api/models/meta-llama/Llama-3.1-8B-Instruct
  - Quote: ""author":"meta-llama""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="4d49942ed880c449" quote_sha256="0a40535180fe917c3954afbb2f8a91b66a2ab7baffc2cdfe9f99b06b89f1c9d4" --> `edge:required:model-llama-3.1-8b-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-llama-3.1-8b-instruct:hosted_by`
  - Edge: `model:llama-3.1-8b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct
  - Quote: "<title>meta-llama/Llama-3.1-8B-Instruct · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f39301a3d1fdfc9f" quote_sha256="64065605f4d507f4ca2d7c38365b90fa84ec9af8b551e81186b60bb2d5fa649d" --> `edge:required:model-magicoder-s-ds-6.7b:developed_by:organization-ise-uiuc` / `generated:model-magicoder-s-ds-6.7b:developed_by`
  - Edge: `model:magicoder-s-ds-6.7b --developed_by--> organization:ise-uiuc`
  - Source URL: https://huggingface.co/api/models/ise-uiuc/Magicoder-S-DS-6.7B
  - Quote: ""author":"ise-uiuc""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5c5ea7d7705d8012" quote_sha256="232bfc89fb7f064f062a31db390625004e4079b1b8d6257e391d7ad25fdd2834" --> `edge:required:model-magicoder-s-ds-6.7b:hosted_by:infrastructure-hugging-face-hub` / `generated:model-magicoder-s-ds-6.7b:hosted_by`
  - Edge: `model:magicoder-s-ds-6.7b --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B
  - Quote: "<title>ise-uiuc/Magicoder-S-DS-6.7B · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="63bd352a0e2a1c53" quote_sha256="3475ecbe98fa231b194ca26d297e834527e396ef4f9723f862993f78dc2b28fb" --> `edge:required:model-magicoder-s-ds-6.7b:licensed_as:license-other-composite` / `generated:model-magicoder-s-ds-6.7b:licensed_as`
  - Edge: `model:magicoder-s-ds-6.7b --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B/raw/main/README.md
  - Quote: "license: other"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e72ffe15facfc8f7" quote_sha256="1b551062927dc44ed2eb284cf08bbfd2cc3b0f78e35585d04fc578107ee42fc1" --> `edge:required:model-mixtral-8x7b-instruct-v0.1:developed_by:organization-mistralai` / `generated:model-mixtral-8x7b-instruct-v0.1:developed_by`
  - Edge: `model:mixtral-8x7b-instruct-v0.1 --developed_by--> organization:mistralai`
  - Source URL: https://huggingface.co/api/models/mistralai/Mixtral-8x7B-Instruct-v0.1
  - Quote: ""author":"mistralai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="4da1ad7650b6da51" quote_sha256="ddadbbf2a9c7f7d4bbb6cd08288a22faf2fe9595f368f2dd7248cd9c7f2d9078" --> `edge:required:model-mixtral-8x7b-instruct-v0.1:hosted_by:infrastructure-hugging-face-hub` / `generated:model-mixtral-8x7b-instruct-v0.1:hosted_by`
  - Edge: `model:mixtral-8x7b-instruct-v0.1 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1
  - Quote: "<title>mistralai/Mixtral-8x7B-Instruct-v0.1 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d66d435c6de5d423" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-mixtral-8x7b-instruct-v0.1:licensed_as:license-apache-2.0` / `generated:model-mixtral-8x7b-instruct-v0.1:licensed_as`
  - Edge: `model:mixtral-8x7b-instruct-v0.1 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="3a6430e08b0976f4" quote_sha256="955dccf67d47df68885d02addfb1a3d5308d69593cc556784bdba57e76063833" --> `edge:required:model-multilingual-e5-large:developed_by:organization-intfloat` / `generated:model-multilingual-e5-large:developed_by`
  - Edge: `model:multilingual-e5-large --developed_by--> organization:intfloat`
  - Source URL: https://huggingface.co/api/models/intfloat/multilingual-e5-large
  - Quote: ""author":"intfloat""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f9866366f47944eb" quote_sha256="5c8915664ef72bbbaddb8c4df370091a9120abb5c3c8dd13fcc1644663197aec" --> `edge:required:model-multilingual-e5-large:hosted_by:infrastructure-hugging-face-hub` / `generated:model-multilingual-e5-large:hosted_by`
  - Edge: `model:multilingual-e5-large --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/intfloat/multilingual-e5-large
  - Quote: "<title>intfloat/multilingual-e5-large · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="da8ed0c7fccb920d" quote_sha256="204d0bce1ef327f348bccd1f6efe3397d28f54009edcb813a141198a262bd528" --> `edge:required:model-multilingual-e5-large:licensed_as:license-mit` / `generated:model-multilingual-e5-large:licensed_as`
  - Edge: `model:multilingual-e5-large --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/intfloat/multilingual-e5-large/raw/main/README.md
  - Quote: "license: mit"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="943cee3902265eb6" quote_sha256="00e4d0b62fd349b9b188f5c5aeadcbe3a909e6304452b4fded1637993804969c" --> `edge:required:model-musicgen-small:developed_by:organization-facebook` / `generated:model-musicgen-small:developed_by`
  - Edge: `model:musicgen-small --developed_by--> organization:facebook`
  - Source URL: https://huggingface.co/api/models/facebook/musicgen-small
  - Quote: ""author":"facebook""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="27eb07aa1c3df976" quote_sha256="360107950ad0b73139ce2f6642c755913036056613d38d7ed6302bd59376e72b" --> `edge:required:model-musicgen-small:hosted_by:infrastructure-hugging-face-hub` / `generated:model-musicgen-small:hosted_by`
  - Edge: `model:musicgen-small --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/facebook/musicgen-small
  - Quote: "<title>facebook/musicgen-small · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="76565001e8d4a75e" quote_sha256="5e9a60ec695488a1b779e29392823381a63629908bd022205ca82dc337570b58" --> `edge:required:model-musicgen-small:licensed_as:license-other-composite` / `generated:model-musicgen-small:licensed_as`
  - Edge: `model:musicgen-small --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/facebook/musicgen-small/raw/main/README.md
  - Quote: "**License:** Code is released under MIT, model weights are released under CC-BY-NC 4.0."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bceb7e9f3ece09bd" quote_sha256="bdf546e4f01dac17bd7bb296e75779af9edeb4901c2c3b234bd1d8975af95aad" --> `edge:required:model-mxbai-embed-large-v1:developed_by:organization-mixedbread-ai` / `generated:model-mxbai-embed-large-v1:developed_by`
  - Edge: `model:mxbai-embed-large-v1 --developed_by--> organization:mixedbread-ai`
  - Source URL: https://huggingface.co/api/models/mixedbread-ai/mxbai-embed-large-v1
  - Quote: ""author":"mixedbread-ai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c3a887a759f75530" quote_sha256="714c2ae42de7b8b23ecdcf7247b6f73eca3a7749ccf278f0732698d0651cc251" --> `edge:required:model-mxbai-embed-large-v1:hosted_by:infrastructure-hugging-face-hub` / `generated:model-mxbai-embed-large-v1:hosted_by`
  - Edge: `model:mxbai-embed-large-v1 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1
  - Quote: "<title>mixedbread-ai/mxbai-embed-large-v1 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f60ca9cc3113c89f" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-mxbai-embed-large-v1:licensed_as:license-apache-2.0` / `generated:model-mxbai-embed-large-v1:licensed_as`
  - Edge: `model:mxbai-embed-large-v1 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="491e638fa6b25bf3" quote_sha256="06b64e44ab2b8cb762eca4c7eca5255f639fc8e1ae0f36beca4dece7779383e6" --> `edge:required:model-olmo-2-1124-7b-instruct:developed_by:organization-allenai` / `generated:model-olmo-2-1124-7b-instruct:developed_by`
  - Edge: `model:olmo-2-1124-7b-instruct --developed_by--> organization:allenai`
  - Source URL: https://huggingface.co/api/models/allenai/OLMo-2-1124-7B-Instruct
  - Quote: ""author":"allenai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2c9e40c24e11c665" quote_sha256="d17118de991ab1602c0db8b0a945457d58f1ce9c8b66692331884102745265f1" --> `edge:required:model-olmo-2-1124-7b-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-olmo-2-1124-7b-instruct:hosted_by`
  - Edge: `model:olmo-2-1124-7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct
  - Quote: "<title>allenai/OLMo-2-1124-7B-Instruct · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f97663afa2f239b7" quote_sha256="6dc6364df624606d05fccee6e6fa258da876c8b3432c22ceeb333ba985b6639c" --> `edge:required:model-olmo-2-1124-7b-instruct:licensed_as:license-apache-2.0` / `generated:model-olmo-2-1124-7b-instruct:licensed_as`
  - Edge: `model:olmo-2-1124-7b-instruct --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct/raw/main/README.md
  - Quote: "OLMo 2 is licensed under the Apache 2.0 license."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="86248e6d2f54932e" quote_sha256="73de9eecd90b47e6ce50c9b0baa7e03a9b2bc1f4c67b689e82798c2829c9be09" --> `edge:required:model-parakeet-tdt-0.6b-v2:developed_by:organization-nvidia` / `generated:model-parakeet-tdt-0.6b-v2:developed_by`
  - Edge: `model:parakeet-tdt-0.6b-v2 --developed_by--> organization:nvidia`
  - Source URL: https://huggingface.co/api/models/nvidia/parakeet-tdt-0.6b-v2
  - Quote: ""author":"nvidia""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b5895ec390cc23a3" quote_sha256="620cfd3225cdcf11672a7944a6111c86d8951a736973a8ec49268bd0228f5171" --> `edge:required:model-parakeet-tdt-0.6b-v2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-parakeet-tdt-0.6b-v2:hosted_by`
  - Edge: `model:parakeet-tdt-0.6b-v2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2
  - Quote: "<title>nvidia/parakeet-tdt-0.6b-v2 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="579b4922138431d2" quote_sha256="b2d5a89a3fc1b48f18dcfe388bc5416d9add392fa8152ea3af8e3ab3c23e07e5" --> `edge:required:model-parakeet-tdt-0.6b-v2:licensed_as:license-cc-by-4.0` / `generated:model-parakeet-tdt-0.6b-v2:licensed_as`
  - Edge: `model:parakeet-tdt-0.6b-v2 --licensed_as--> license:cc-by-4.0`
  - Source URL: https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2/raw/main/README.md
  - Quote: "license: cc-by-4.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="1f1b19015ce63168" quote_sha256="7606e29465659dcc3986cb75dbba74e8a604b07a785bd59e2b8542581145e663" --> `edge:required:model-phi-3-mini-4k-instruct:developed_by:organization-microsoft` / `generated:model-phi-3-mini-4k-instruct:developed_by`
  - Edge: `model:phi-3-mini-4k-instruct --developed_by--> organization:microsoft`
  - Source URL: https://huggingface.co/api/models/microsoft/Phi-3-mini-4k-instruct
  - Quote: ""author":"microsoft""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c1c667beecd90123" quote_sha256="db671cf513ab37a460b4f6ff4649faa2f9cd1ba009812009841bf6b550cda990" --> `edge:required:model-phi-3-mini-4k-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-phi-3-mini-4k-instruct:hosted_by`
  - Edge: `model:phi-3-mini-4k-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct
  - Quote: "<title>microsoft/Phi-3-mini-4k-instruct · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="619c4c14d9407efb" quote_sha256="717b40ba1a90b81c73986456a19631328e0001029f4b15dc4471b906dd406eae" --> `edge:required:model-phi-3-mini-4k-instruct:licensed_as:license-mit` / `generated:model-phi-3-mini-4k-instruct:licensed_as`
  - Edge: `model:phi-3-mini-4k-instruct --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct/raw/main/README.md
  - Quote: "The model is licensed under the MIT license."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="3dd246d553871a99" quote_sha256="ec108f0689fae93bbce3c46a189c492d53de53600ca261058013805c01db5d98" --> `edge:required:model-pixart-xl-2-1024-ms:developed_by:organization-pixart-alpha` / `generated:model-pixart-xl-2-1024-ms:developed_by`
  - Edge: `model:pixart-xl-2-1024-ms --developed_by--> organization:pixart-alpha`
  - Source URL: https://huggingface.co/api/models/PixArt-alpha/PixArt-XL-2-1024-MS
  - Quote: ""author":"PixArt-alpha""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="344b9d8ecb5d255e" quote_sha256="b075b75024d0d91fc9e3094519d227e95d4c8ee507a334ed2047bac1c4d2f775" --> `edge:required:model-pixart-xl-2-1024-ms:hosted_by:infrastructure-hugging-face-hub` / `generated:model-pixart-xl-2-1024-ms:hosted_by`
  - Edge: `model:pixart-xl-2-1024-ms --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/PixArt-alpha/PixArt-XL-2-1024-MS
  - Quote: "<title>PixArt-alpha/PixArt-XL-2-1024-MS · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0e23d4d0dc31bcc8" quote_sha256="4988bc2ef0aac5336f618af1c802af5661550dbb2de85237f824a77209535dc2" --> `edge:required:model-pixart-xl-2-1024-ms:licensed_as:license-openrail-plus-plus` / `generated:model-pixart-xl-2-1024-ms:licensed_as`
  - Edge: `model:pixart-xl-2-1024-ms --licensed_as--> license:openrail-plus-plus`
  - Source URL: https://huggingface.co/PixArt-alpha/PixArt-XL-2-1024-MS/raw/main/README.md
  - Quote: "license: openrail++"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f38860a1aa64896a" quote_sha256="406ec1f5fc9c32b6d60cdcac54bc3fd27d5aaa0b60f2da2056039d4b25df5b8a" --> `edge:required:model-playground-v2.5-1024px-aesthetic:developed_by:organization-playgroundai` / `generated:model-playground-v2.5-1024px-aesthetic:developed_by`
  - Edge: `model:playground-v2.5-1024px-aesthetic --developed_by--> organization:playgroundai`
  - Source URL: https://huggingface.co/api/models/playgroundai/playground-v2.5-1024px-aesthetic
  - Quote: ""author":"playgroundai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="dad1a142f933c764" quote_sha256="3d85a59f45a16702afaf0c6c7ed76d3ab651b1e08918794aceaff42725e7a2d2" --> `edge:required:model-playground-v2.5-1024px-aesthetic:hosted_by:infrastructure-hugging-face-hub` / `generated:model-playground-v2.5-1024px-aesthetic:hosted_by`
  - Edge: `model:playground-v2.5-1024px-aesthetic --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic
  - Quote: "<title>playgroundai/playground-v2.5-1024px-aesthetic · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ec35de4d56da6957" quote_sha256="e17a160b8fedcf46af4e45a34cabc7c4dd2e8d67ea8a1bafa915cbef63969bc3" --> `edge:required:model-playground-v2.5-1024px-aesthetic:licensed_as:license-other-composite` / `generated:model-playground-v2.5-1024px-aesthetic:licensed_as`
  - Edge: `model:playground-v2.5-1024px-aesthetic --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic/raw/main/README.md
  - Quote: "- **License:** [Playground v2.5 Community License](https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic/blob/main/LICENSE.md)"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="1b2c8dd5de649509" quote_sha256="01a8efc9d8e61715538fa624c2a9ea2097a775e613abeec7e8ddcd8e15a0fedf" --> `edge:required:model-santacoder:developed_by:organization-bigcode` / `generated:model-santacoder:developed_by`
  - Edge: `model:santacoder --developed_by--> organization:bigcode`
  - Source URL: https://huggingface.co/api/models/bigcode/santacoder
  - Quote: ""author":"bigcode""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5b773f7c78e9f4b1" quote_sha256="5881f411a1bc10dc45d563da65cec9276c4d6613b1f41adca67c319a90bc5295" --> `edge:required:model-santacoder:hosted_by:infrastructure-hugging-face-hub` / `generated:model-santacoder:hosted_by`
  - Edge: `model:santacoder --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/bigcode/santacoder
  - Quote: "<title>bigcode/santacoder · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="73cf71d7a08f7806" quote_sha256="7d7511edbfd5552097fb53401fd313b03b56448cb93bf9f985aee6ca3f93a8a4" --> `edge:required:model-santacoder:licensed_as:license-bigcode-openrail-m` / `generated:model-santacoder:licensed_as`
  - Edge: `model:santacoder --licensed_as--> license:bigcode-openrail-m`
  - Source URL: https://huggingface.co/bigcode/santacoder/raw/main/README.md
  - Quote: "The model is licensed under the BigCode OpenRAIL-M v1 license agreement. You can find the full agreement here."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ca36a546718632a1" quote_sha256="00e4d0b62fd349b9b188f5c5aeadcbe3a909e6304452b4fded1637993804969c" --> `edge:required:model-seamless-m4t-v2-large:developed_by:organization-facebook` / `generated:model-seamless-m4t-v2-large:developed_by`
  - Edge: `model:seamless-m4t-v2-large --developed_by--> organization:facebook`
  - Source URL: https://huggingface.co/api/models/facebook/seamless-m4t-v2-large
  - Quote: ""author":"facebook""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d3fe6d798290aab2" quote_sha256="e092c85160189dc72e3a61b31d4c8cd5b737995a680a620c957e87c64078882b" --> `edge:required:model-seamless-m4t-v2-large:hosted_by:infrastructure-hugging-face-hub` / `generated:model-seamless-m4t-v2-large:hosted_by`
  - Edge: `model:seamless-m4t-v2-large --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/facebook/seamless-m4t-v2-large
  - Quote: "<title>facebook/seamless-m4t-v2-large · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ba41e3c6ff0c78d1" quote_sha256="20c43e4767a846469dd86bf4631e417acdcf88c7fd2274ccc16a7653ba174538" --> `edge:required:model-seamless-m4t-v2-large:licensed_as:license-other-composite` / `generated:model-seamless-m4t-v2-large:licensed_as`
  - Edge: `model:seamless-m4t-v2-large --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/facebook/seamless-m4t-v2-large/raw/main/README.md
  - Quote: "license: cc-by-nc-4.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="06bc0737fe2e3962" quote_sha256="7606e29465659dcc3986cb75dbba74e8a604b07a785bd59e2b8542581145e663" --> `edge:required:model-speecht5-tts:developed_by:organization-microsoft` / `generated:model-speecht5-tts:developed_by`
  - Edge: `model:speecht5-tts --developed_by--> organization:microsoft`
  - Source URL: https://huggingface.co/api/models/microsoft/speecht5_tts
  - Quote: ""author":"microsoft""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="9c243bd0c11f0dbf" quote_sha256="215e506dc751676aa999587ab26df182ee1c62a6fbdffefb14c040fba44b4a53" --> `edge:required:model-speecht5-tts:hosted_by:infrastructure-hugging-face-hub` / `generated:model-speecht5-tts:hosted_by`
  - Edge: `model:speecht5-tts --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/microsoft/speecht5_tts
  - Quote: "<title>microsoft/speecht5_tts · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d6e564f42409b3d2" quote_sha256="de22df2fb96e01fc6377595a2e6bafce3d69ed36bfe7ae63df4b2cfc8436be8a" --> `edge:required:model-speecht5-tts:licensed_as:license-mit` / `generated:model-speecht5-tts:licensed_as`
  - Edge: `model:speecht5-tts --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/microsoft/speecht5_tts/raw/main/README.md
  - Quote: "SpeechT5 was first released in this repository, original weights. The license used is MIT."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f0ce1e7cc7d9c390" quote_sha256="c895f32f4267c8ad7c503790096e97d779c56a025bbfadd13f2a76b31a0e8009" --> `edge:required:model-stable-diffusion-3.5-large:developed_by:organization-stabilityai` / `generated:model-stable-diffusion-3.5-large:developed_by`
  - Edge: `model:stable-diffusion-3.5-large --developed_by--> organization:stabilityai`
  - Source URL: https://huggingface.co/api/models/stabilityai/stable-diffusion-3.5-large
  - Quote: ""author":"stabilityai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0327d38e1294fa9b" quote_sha256="ea8130b7311675e23a0bdac327ca0ef68fc083d3481b42271ef1f95b4f1f9343" --> `edge:required:model-stable-diffusion-3.5-large:hosted_by:infrastructure-hugging-face-hub` / `generated:model-stable-diffusion-3.5-large:hosted_by`
  - Edge: `model:stable-diffusion-3.5-large --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/stabilityai/stable-diffusion-3.5-large
  - Quote: "<title>stabilityai/stable-diffusion-3.5-large · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c43db7131e05ebf6" quote_sha256="514c65eb2945a70946f613c6ac6e28cc682349ad0f0bd7acd825728f301e0266" --> `edge:required:model-stable-diffusion-v1-5:developed_by:organization-stable-diffusion-v1-5` / `generated:model-stable-diffusion-v1-5:developed_by`
  - Edge: `model:stable-diffusion-v1-5 --developed_by--> organization:stable-diffusion-v1-5`
  - Source URL: https://huggingface.co/api/models/stable-diffusion-v1-5/stable-diffusion-v1-5
  - Quote: ""author":"stable-diffusion-v1-5""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8e508fe38e44dcdc" quote_sha256="4a53fa2b6698a5ebb4dfa756d541e58ecff16a6042cf73006ff1e7bcbe55a51f" --> `edge:required:model-stable-diffusion-v1-5:hosted_by:infrastructure-hugging-face-hub` / `generated:model-stable-diffusion-v1-5:hosted_by`
  - Edge: `model:stable-diffusion-v1-5 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5
  - Quote: "<title>stable-diffusion-v1-5/stable-diffusion-v1-5 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="835d5ae9257a15e1" quote_sha256="1c24c5502ef16a4f99dd7560a4156dad775d3d890e5b2018e42cd7ab7745a91c" --> `edge:required:model-stable-diffusion-v1-5:licensed_as:license-other-composite` / `generated:model-stable-diffusion-v1-5:licensed_as`
  - Edge: `model:stable-diffusion-v1-5 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5/raw/main/README.md
  - Quote: "license: creativeml-openrail-m"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="17ca11643029209d" quote_sha256="00e4d0b62fd349b9b188f5c5aeadcbe3a909e6304452b4fded1637993804969c" --> `edge:required:model-wav2vec2-base-960h:developed_by:organization-facebook` / `generated:model-wav2vec2-base-960h:developed_by`
  - Edge: `model:wav2vec2-base-960h --developed_by--> organization:facebook`
  - Source URL: https://huggingface.co/api/models/facebook/wav2vec2-base-960h
  - Quote: ""author":"facebook""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="efbccc530d02f72b" quote_sha256="97b535905acde3d1744edf57e5602d7cc59f17816f19a12d9127ee8523d68ab4" --> `edge:required:model-wav2vec2-base-960h:hosted_by:infrastructure-hugging-face-hub` / `generated:model-wav2vec2-base-960h:hosted_by`
  - Edge: `model:wav2vec2-base-960h --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/facebook/wav2vec2-base-960h
  - Quote: "<title>facebook/wav2vec2-base-960h · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="304007248c0fc713" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-wav2vec2-base-960h:licensed_as:license-apache-2.0` / `generated:model-wav2vec2-base-960h:licensed_as`
  - Edge: `model:wav2vec2-base-960h --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/facebook/wav2vec2-base-960h/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="22f52714f87684a4" quote_sha256="d267b29ce44a9ad368a9525b74c28f1accad4685128d2190a9d0c2ff1901009e" --> `edge:required:model-whisper-small:developed_by:organization-openai` / `generated:model-whisper-small:developed_by`
  - Edge: `model:whisper-small --developed_by--> organization:openai`
  - Source URL: https://huggingface.co/api/models/openai/whisper-small
  - Quote: ""author":"openai""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="db0d15d0a0ae253c" quote_sha256="ddec6d1ced35c1210f298854eb6811643df304bf3abe6ebe44c4c8a1163e2eae" --> `edge:required:model-whisper-small:hosted_by:infrastructure-hugging-face-hub` / `generated:model-whisper-small:hosted_by`
  - Edge: `model:whisper-small --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/openai/whisper-small
  - Quote: "<title>openai/whisper-small · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6fbe8c0f20929489" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-whisper-small:licensed_as:license-apache-2.0` / `generated:model-whisper-small:licensed_as`
  - Edge: `model:whisper-small --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/openai/whisper-small/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f99a04a8f38f8794" quote_sha256="fcc4b132893988bb80e908af306e41e1c91dff81b11830c5a325a4c5e679f4f7" --> `edge:required:model-xtts-v2:developed_by:organization-coqui` / `generated:model-xtts-v2:developed_by`
  - Edge: `model:xtts-v2 --developed_by--> organization:coqui`
  - Source URL: https://huggingface.co/api/models/coqui/XTTS-v2
  - Quote: ""author":"coqui""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="449be047ec2bc1f4" quote_sha256="18ed3fe44362811d51e643f66af9d1bf40aeadbc22d2b216087c984f66c5e9f8" --> `edge:required:model-xtts-v2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-xtts-v2:hosted_by`
  - Edge: `model:xtts-v2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/coqui/XTTS-v2
  - Quote: "<title>coqui/XTTS-v2 · Hugging Face</title>"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="9165fab285b5cdf0" quote_sha256="e9bcb4972610882a8433311755b2a856bfcda63af9700c61a846beee72b9fcce" --> `edge:required:model-xtts-v2:licensed_as:license-other-composite` / `generated:model-xtts-v2:licensed_as`
  - Edge: `model:xtts-v2 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/coqui/XTTS-v2/raw/main/README.md
  - Quote: "This model is licensed under Coqui Public Model License. There's a lot that goes into a license for generative models, and you can read more of the origin story of CPML here."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="598ee7c868224a1c" quote_sha256="72b4d2c7aac6d2fa5241737891b3ac397d8f274df7dbdc2a60a612619d74aad8" --> `edge:required:software-axolotl:developed_by:organization-axolotl-ai-cloud` / `generated:software-axolotl:developed_by`
  - Edge: `software:axolotl --developed_by--> organization:axolotl-ai-cloud`
  - Source URL: https://api.github.com/repos/axolotl-ai-cloud/axolotl
  - Quote: ""full_name": "axolotl-ai-cloud/axolotl","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e84b9da4d770ccd7" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-axolotl:licensed_as:license-apache-2.0` / `generated:software-axolotl:licensed_as`
  - Edge: `software:axolotl --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/axolotl-ai-cloud/axolotl
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="e7ceecbcc77d71bb" quote_sha256="75246ac28b0a9e88229e6489c654a876d73f63c553b7f1a0d822f43569091590" --> `edge:required:software-chroma:developed_by:organization-chroma-core` / `generated:software-chroma:developed_by`
  - Edge: `software:chroma --developed_by--> organization:chroma-core`
  - Source URL: https://api.github.com/repos/chroma-core/chroma
  - Quote: ""full_name": "chroma-core/chroma","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ae4720bd0957cff9" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-chroma:licensed_as:license-apache-2.0` / `generated:software-chroma:licensed_as`
  - Edge: `software:chroma --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/chroma-core/chroma
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bd57611bc3b841ad" quote_sha256="1530666e636adf3df945d6159c26310a9e5c2ecdbfde16088b8a16908dc8b141" --> `edge:required:software-dagger:developed_by:organization-dagger` / `generated:software-dagger:developed_by`
  - Edge: `software:dagger --developed_by--> organization:dagger`
  - Source URL: https://api.github.com/repos/dagger/dagger
  - Quote: ""full_name": "dagger/dagger","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="13bee807be452bcf" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-dagger:licensed_as:license-apache-2.0` / `generated:software-dagger:licensed_as`
  - Edge: `software:dagger --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/dagger/dagger
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b0ea8089f91a5a2e" quote_sha256="a76a09622d5b52631dd04a0db435b294d3081b24a191d76790b642448375ed44" --> `edge:required:software-daytona:developed_by:organization-daytonaio` / `generated:software-daytona:developed_by`
  - Edge: `software:daytona --developed_by--> organization:daytonaio`
  - Source URL: https://api.github.com/repos/daytonaio/daytona
  - Quote: ""full_name": "daytonaio/daytona","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ee845eb82f59309a" quote_sha256="eed60adbfcf5cc12b5be37128035f0e70495001620bf0edefa867c6f68d0d555" --> `edge:required:software-daytona:licensed_as:license-agpl-3.0` / `generated:software-daytona:licensed_as`
  - Edge: `software:daytona --licensed_as--> license:agpl-3.0`
  - Source URL: https://api.github.com/repos/daytonaio/daytona
  - Quote: ""name": "GNU Affero General Public License v3.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b48099d737d1db6e" quote_sha256="8ff5ca9619a924e09ba39598b410679dd343be0a1fb95c08b4582bfc2012eda2" --> `edge:required:software-deepeval:developed_by:organization-confident-ai` / `generated:software-deepeval:developed_by`
  - Edge: `software:deepeval --developed_by--> organization:confident-ai`
  - Source URL: https://api.github.com/repos/confident-ai/deepeval
  - Quote: ""full_name": "confident-ai/deepeval","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="4ca6cd5d83c2a326" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-deepeval:licensed_as:license-apache-2.0` / `generated:software-deepeval:licensed_as`
  - Edge: `software:deepeval --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/confident-ai/deepeval
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2fc7ae97cd72cd24" quote_sha256="34ea8e46fcc4ea8c46cd430bd4933fe7be0a17bd29747ef4866efa48cdecf948" --> `edge:required:software-deepspeed:developed_by:organization-deepspeedai` / `generated:software-deepspeed:developed_by`
  - Edge: `software:deepspeed --developed_by--> organization:deepspeedai`
  - Source URL: https://api.github.com/repos/deepspeedai/DeepSpeed
  - Quote: ""full_name": "deepspeedai/DeepSpeed","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="723966b2741515ab" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-deepspeed:licensed_as:license-apache-2.0` / `generated:software-deepspeed:licensed_as`
  - Edge: `software:deepspeed --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/deepspeedai/DeepSpeed
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="7545dc70bb8ab2a5" quote_sha256="ab61dc3e39fc233e9c4f5afa05e655567d4ed9f90c3342081e65c42e4c0b9001" --> `edge:required:software-dev-containers-spec:developed_by:organization-devcontainers` / `generated:software-dev-containers-spec:developed_by`
  - Edge: `software:dev-containers-spec --developed_by--> organization:devcontainers`
  - Source URL: https://api.github.com/repos/devcontainers/spec
  - Quote: ""full_name": "devcontainers/spec","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="95323a5a7303b0ef" quote_sha256="2d7ede7c40e997c46fd139e0245bf9913822cb00071b00af583d4fb9200069fd" --> `edge:required:software-dev-containers-spec:licensed_as:license-cc-by-4.0` / `generated:software-dev-containers-spec:licensed_as`
  - Edge: `software:dev-containers-spec --licensed_as--> license:cc-by-4.0`
  - Source URL: https://raw.githubusercontent.com/devcontainers/spec/main/README.md
  - Quote: "Creative Commons Attribution 4.0 License (International): https://creativecommons.org/licenses/by/4.0/legalcode"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bf85b4dcdb888255" quote_sha256="a6b5b8f98ecf98dac2885b118259983539bd0c0dad2a00f32430ba7da97e3231" --> `edge:required:software-docker-moby:developed_by:organization-moby` / `generated:software-docker-moby:developed_by`
  - Edge: `software:docker-moby --developed_by--> organization:moby`
  - Source URL: https://api.github.com/repos/moby/moby
  - Quote: ""full_name": "moby/moby","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="27fd7d1836f021fb" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-docker-moby:licensed_as:license-apache-2.0` / `generated:software-docker-moby:licensed_as`
  - Edge: `software:docker-moby --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/moby/moby
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c8a64822272a5b30" quote_sha256="e3584fbb641c3f849b9868fd67c28fdc78af1b80ae909406517e02909a15811c" --> `edge:required:software-e2b-infra:developed_by:organization-e2b-dev` / `generated:software-e2b-infra:developed_by`
  - Edge: `software:e2b-infra --developed_by--> organization:e2b-dev`
  - Source URL: https://api.github.com/repos/e2b-dev/infra
  - Quote: ""full_name": "e2b-dev/infra","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d20e08c9c455a344" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-e2b-infra:licensed_as:license-apache-2.0` / `generated:software-e2b-infra:licensed_as`
  - Edge: `software:e2b-infra --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/e2b-dev/infra
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="374d87f3912569d8" quote_sha256="42a275a9c109bbb394b6bb91185f3b6a5a9c86f875c320faea52eb038a77bd94" --> `edge:required:software-faiss:developed_by:organization-facebookresearch` / `generated:software-faiss:developed_by`
  - Edge: `software:faiss --developed_by--> organization:facebookresearch`
  - Source URL: https://api.github.com/repos/facebookresearch/faiss
  - Quote: ""full_name": "facebookresearch/faiss","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="20fc23f98c125fa8" quote_sha256="a0584e1bc3b61c46141330e922332042a604a262fa07447ceb5fa55750f09574" --> `edge:required:software-faiss:licensed_as:license-mit` / `generated:software-faiss:licensed_as`
  - Edge: `software:faiss --licensed_as--> license:mit`
  - Source URL: https://api.github.com/repos/facebookresearch/faiss
  - Quote: ""name": "MIT License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="cb3f5c6641a34283" quote_sha256="0dc5cf17ebc3a655de581fb893fa5a4e326efb83fb94326b6c3a4209c80ba04d" --> `edge:required:software-firecracker:developed_by:organization-firecracker-microvm` / `generated:software-firecracker:developed_by`
  - Edge: `software:firecracker --developed_by--> organization:firecracker-microvm`
  - Source URL: https://api.github.com/repos/firecracker-microvm/firecracker
  - Quote: ""full_name": "firecracker-microvm/firecracker","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6aa178948d54c931" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-firecracker:licensed_as:license-apache-2.0` / `generated:software-firecracker:licensed_as`
  - Edge: `software:firecracker --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/firecracker-microvm/firecracker
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="138f07468ebc960a" quote_sha256="8988672e0c0b04e3c349286e81ef45153acb82f46156fecd02f986d80f6a9ec0" --> `edge:required:software-gvisor:developed_by:organization-google` / `generated:software-gvisor:developed_by`
  - Edge: `software:gvisor --developed_by--> organization:google`
  - Source URL: https://api.github.com/repos/google/gvisor
  - Quote: ""full_name": "google/gvisor","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="35eb5645776d4f58" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-gvisor:licensed_as:license-apache-2.0` / `generated:software-gvisor:licensed_as`
  - Edge: `software:gvisor --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/google/gvisor
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="57f7c5f7c16cfca5" quote_sha256="104878b8606af713131818cc6fb45cb50c115745d4477d41280a838744ec442a" --> `edge:required:software-haystack:developed_by:organization-deepset-ai` / `generated:software-haystack:developed_by`
  - Edge: `software:haystack --developed_by--> organization:deepset-ai`
  - Source URL: https://api.github.com/repos/deepset-ai/haystack
  - Quote: ""full_name": "deepset-ai/haystack","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="301ee39557dbc5f4" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-haystack:licensed_as:license-apache-2.0` / `generated:software-haystack:licensed_as`
  - Edge: `software:haystack --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/deepset-ai/haystack
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="484feeb519c10a5f" quote_sha256="45754f24574ea1f36eadb8374d2666acba9c4e91ffb4877512b5a9874dbf4202" --> `edge:required:software-helm:developed_by:organization-stanford-crfm` / `generated:software-helm:developed_by`
  - Edge: `software:helm --developed_by--> organization:stanford-crfm`
  - Source URL: https://api.github.com/repos/stanford-crfm/helm
  - Quote: ""full_name": "stanford-crfm/helm","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5493348164cf29c4" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-helm:licensed_as:license-apache-2.0` / `generated:software-helm:licensed_as`
  - Edge: `software:helm --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/stanford-crfm/helm
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2b88247a04fd715e" quote_sha256="add1fbb692851d01ae23e01d103fd8014d8c78d217a3146314efbee1967ee4ac" --> `edge:required:software-kata-containers:developed_by:organization-kata-containers` / `generated:software-kata-containers:developed_by`
  - Edge: `software:kata-containers --developed_by--> organization:kata-containers`
  - Source URL: https://api.github.com/repos/kata-containers/kata-containers
  - Quote: ""full_name": "kata-containers/kata-containers","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6f0e78bdd580f778" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-kata-containers:licensed_as:license-apache-2.0` / `generated:software-kata-containers:licensed_as`
  - Edge: `software:kata-containers --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/kata-containers/kata-containers
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="173184521eee134a" quote_sha256="4f165a882d2884c352fe5091a9cd6a37f8a31ce0bc3550d7d4aaf52ebcc157ac" --> `edge:required:software-kserve:developed_by:organization-kserve` / `generated:software-kserve:developed_by`
  - Edge: `software:kserve --developed_by--> organization:kserve`
  - Source URL: https://api.github.com/repos/kserve/kserve
  - Quote: ""full_name": "kserve/kserve","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="516108e2c8811c0d" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-kserve:licensed_as:license-apache-2.0` / `generated:software-kserve:licensed_as`
  - Edge: `software:kserve --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/kserve/kserve
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5a87aab4afb48403" quote_sha256="2b9161f7b20d0c18da283dbbdc05228f46c395c4448ff1595fac3a78ebfbecd5" --> `edge:required:software-kubernetes:developed_by:organization-kubernetes` / `generated:software-kubernetes:developed_by`
  - Edge: `software:kubernetes --developed_by--> organization:kubernetes`
  - Source URL: https://api.github.com/repos/kubernetes/kubernetes
  - Quote: ""full_name": "kubernetes/kubernetes","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="303cbb0e36a74399" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-kubernetes:licensed_as:license-apache-2.0` / `generated:software-kubernetes:licensed_as`
  - Edge: `software:kubernetes --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/kubernetes/kubernetes
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f6650e1c4e98abd8" quote_sha256="6e240b8493f4997ccae6fb85efaaef615df7e9bd4b15b9ed20dda804f62a0f21" --> `edge:required:software-lancedb:developed_by:organization-lancedb` / `generated:software-lancedb:developed_by`
  - Edge: `software:lancedb --developed_by--> organization:lancedb`
  - Source URL: https://api.github.com/repos/lancedb/lancedb
  - Quote: ""full_name": "lancedb/lancedb","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="627b9c2be49f96ac" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-lancedb:licensed_as:license-apache-2.0` / `generated:software-lancedb:licensed_as`
  - Edge: `software:lancedb --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/lancedb/lancedb
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="850d3b1c52d7e8a3" quote_sha256="6140e8ec28999e52f58e4013091bb09135875dcb8f4321669c1a0e220d636617" --> `edge:required:software-langchain:developed_by:organization-langchain-ai` / `generated:software-langchain:developed_by`
  - Edge: `software:langchain --developed_by--> organization:langchain-ai`
  - Source URL: https://api.github.com/repos/langchain-ai/langchain
  - Quote: ""full_name": "langchain-ai/langchain","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6bc1afe97570fbe7" quote_sha256="a0584e1bc3b61c46141330e922332042a604a262fa07447ceb5fa55750f09574" --> `edge:required:software-langchain:licensed_as:license-mit` / `generated:software-langchain:licensed_as`
  - Edge: `software:langchain --licensed_as--> license:mit`
  - Source URL: https://api.github.com/repos/langchain-ai/langchain
  - Quote: ""name": "MIT License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="73dd3085e6621f82" quote_sha256="b1aa753a8ec92c50a985d8ad9fc3f1af1de30a3c365261166c7351412a6f514d" --> `edge:required:software-lighteval:developed_by:organization-huggingface` / `generated:software-lighteval:developed_by`
  - Edge: `software:lighteval --developed_by--> organization:huggingface`
  - Source URL: https://api.github.com/repos/huggingface/lighteval
  - Quote: ""full_name": "huggingface/lighteval","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="4a16dee715a90bba" quote_sha256="a0584e1bc3b61c46141330e922332042a604a262fa07447ceb5fa55750f09574" --> `edge:required:software-lighteval:licensed_as:license-mit` / `generated:software-lighteval:licensed_as`
  - Edge: `software:lighteval --licensed_as--> license:mit`
  - Source URL: https://api.github.com/repos/huggingface/lighteval
  - Quote: ""name": "MIT License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5bda97292fe1dd39" quote_sha256="9be6de8df93c166fd76230e9f32408b815a88344076adca79ecbd74db0349745" --> `edge:required:software-litellm:developed_by:organization-berriai` / `generated:software-litellm:developed_by`
  - Edge: `software:litellm --developed_by--> organization:berriai`
  - Source URL: https://api.github.com/repos/BerriAI/litellm
  - Quote: ""full_name": "BerriAI/litellm","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fc328e93f903997b" quote_sha256="534bd8b5ef819f999035f43d26bd09c5fd30c4d3adaa0da996d544e3684fcb63" --> `edge:required:software-llamaindex:developed_by:organization-run-llama` / `generated:software-llamaindex:developed_by`
  - Edge: `software:llamaindex --developed_by--> organization:run-llama`
  - Source URL: https://api.github.com/repos/run-llama/llama_index
  - Quote: ""full_name": "run-llama/llama_index","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d8f80d875189cef8" quote_sha256="a0584e1bc3b61c46141330e922332042a604a262fa07447ceb5fa55750f09574" --> `edge:required:software-llamaindex:licensed_as:license-mit` / `generated:software-llamaindex:licensed_as`
  - Edge: `software:llamaindex --licensed_as--> license:mit`
  - Source URL: https://api.github.com/repos/run-llama/llama_index
  - Quote: ""name": "MIT License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="116e5d6cc839f79b" quote_sha256="aa6561089b566819ef119da18c273bcfb838d757d1fa73c8a0b366f80139dea1" --> `edge:required:software-lm-evaluation-harness:developed_by:organization-eleutherai` / `generated:software-lm-evaluation-harness:developed_by`
  - Edge: `software:lm-evaluation-harness --developed_by--> organization:eleutherai`
  - Source URL: https://api.github.com/repos/EleutherAI/lm-evaluation-harness
  - Quote: ""full_name": "EleutherAI/lm-evaluation-harness","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6a97a610b2de5d1f" quote_sha256="a0584e1bc3b61c46141330e922332042a604a262fa07447ceb5fa55750f09574" --> `edge:required:software-lm-evaluation-harness:licensed_as:license-mit` / `generated:software-lm-evaluation-harness:licensed_as`
  - Edge: `software:lm-evaluation-harness --licensed_as--> license:mit`
  - Source URL: https://api.github.com/repos/EleutherAI/lm-evaluation-harness
  - Quote: ""name": "MIT License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8e34c4c7435f2a92" quote_sha256="75c1170180f55435fc0dba680f5a58814eb56999ab5a59d83268e1c525ec5845" --> `edge:required:software-localai:developed_by:organization-mudler` / `generated:software-localai:developed_by`
  - Edge: `software:localai --developed_by--> organization:mudler`
  - Source URL: https://api.github.com/repos/mudler/LocalAI
  - Quote: ""full_name": "mudler/LocalAI","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="7d2813409ac954b5" quote_sha256="a0584e1bc3b61c46141330e922332042a604a262fa07447ceb5fa55750f09574" --> `edge:required:software-localai:licensed_as:license-mit` / `generated:software-localai:licensed_as`
  - Edge: `software:localai --licensed_as--> license:mit`
  - Source URL: https://api.github.com/repos/mudler/LocalAI
  - Quote: ""name": "MIT License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6d818f4eb859fa33" quote_sha256="80bf51c9eb65ee74bca86e16085c2a23b443c213ff7fa5df717d07414d3d34e7" --> `edge:required:software-megatron-lm:developed_by:organization-nvidia` / `generated:software-megatron-lm:developed_by`
  - Edge: `software:megatron-lm --developed_by--> organization:nvidia`
  - Source URL: https://api.github.com/repos/NVIDIA/Megatron-LM
  - Quote: ""full_name": "NVIDIA/Megatron-LM","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0b4fa2825c5c4d10" quote_sha256="df59e410efb86f8d74d88ac37ac135373373822276dc54a195dd7c24de77a2a9" --> `edge:required:software-megatron-lm:licensed_as:license-other-composite` / `generated:software-megatron-lm:licensed_as`
  - Edge: `software:megatron-lm --licensed_as--> license:other-composite`
  - Source URL: https://raw.githubusercontent.com/NVIDIA/Megatron-LM/main/LICENSE
  - Quote: "This repository also contains code from Hugging Face Inc., Google Research, Facebook (from their Fairseq, Dino, and ParlAI projects), Microsoft (from their Swin-Transformer project), Philip Popien, the Mamba project (Tri Dao and Albert Gu), and the Triton language and compiler project (Philippe Tillet and OpenAI). Files from these organizations have notices at the top of each file. Below are licenses used in those files, as indicated."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6348d0ec4410e951" quote_sha256="137745b3681f8e9b7f3afd1600506d256b2101a4aeae05294cf5cd8b410596b6" --> `edge:required:software-milvus:developed_by:organization-milvus-io` / `generated:software-milvus:developed_by`
  - Edge: `software:milvus --developed_by--> organization:milvus-io`
  - Source URL: https://api.github.com/repos/milvus-io/milvus
  - Quote: ""full_name": "milvus-io/milvus","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fa27484eeb39e57d" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-milvus:licensed_as:license-apache-2.0` / `generated:software-milvus:licensed_as`
  - Edge: `software:milvus --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/milvus-io/milvus
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bc3dc4d6ca1d3b00" quote_sha256="2b8ff32f5332459d04d6ae0b72c43f8fe3d59d070f9b52f21e4e22cb17ea985d" --> `edge:required:software-openai-evals:developed_by:organization-openai` / `generated:software-openai-evals:developed_by`
  - Edge: `software:openai-evals --developed_by--> organization:openai`
  - Source URL: https://api.github.com/repos/openai/evals
  - Quote: ""full_name": "openai/evals","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="158146e060d78ecd" quote_sha256="322a8b7c034e8190dd3e5667ad9e4a5d5474ae3abc3a316cfaf34e90c10d2383" --> `edge:required:software-openai-evals:licensed_as:license-other-composite` / `generated:software-openai-evals:licensed_as`
  - Edge: `software:openai-evals --licensed_as--> license:other-composite`
  - Source URL: https://raw.githubusercontent.com/openai/evals/main/README.md
  - Quote: "By contributing to evals, you are agreeing to make your evaluation logic and data under the same MIT license as this repository. You must have adequate rights to upload any data used in an eval. OpenAI reserves the right to use this data in future service improvements to our product. Contributions to OpenAI evals will be subject to our usual Usage Policies: https://platform.openai.com/docs/usage-policies."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b93d68fce8b1c600" quote_sha256="c7b45015ca3041d39e1ef24a80245bf261e62c3b4d574e33c5400356f93d9f6d" --> `edge:required:software-opencompass:developed_by:organization-open-compass` / `generated:software-opencompass:developed_by`
  - Edge: `software:opencompass --developed_by--> organization:open-compass`
  - Source URL: https://api.github.com/repos/open-compass/opencompass
  - Quote: ""full_name": "open-compass/opencompass","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="25d67f345f599c98" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-opencompass:licensed_as:license-apache-2.0` / `generated:software-opencompass:licensed_as`
  - Edge: `software:opencompass --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/open-compass/opencompass
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="56197a35d021a40e" quote_sha256="7646c6efcb331442538b02efb91e2d56f7a3ba5dd5050848a13a65bb9dd0a821" --> `edge:required:software-openhands-runtime:developed_by:organization-openhands` / `generated:software-openhands-runtime:developed_by`
  - Edge: `software:openhands-runtime --developed_by--> organization:openhands`
  - Source URL: https://api.github.com/repos/OpenHands/OpenHands
  - Quote: ""full_name": "OpenHands/OpenHands","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="317e5a6089de86e2" quote_sha256="133a2f3b8e993b06f800ae8c316a2c830bd863c11a3d295e5aa458942e035f24" --> `edge:required:software-openhands-runtime:licensed_as:license-other-composite` / `generated:software-openhands-runtime:licensed_as`
  - Edge: `software:openhands-runtime --licensed_as--> license:other-composite`
  - Source URL: https://raw.githubusercontent.com/OpenHands/OpenHands/main/README.md
  - Quote: "All our work is available under the MIT license, except for the `enterprise/` directory in this repository (see the enterprise license for details). The core `openhands` and `agent-server` Docker images are fully MIT-licensed as well."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c41d1e8382e58970" quote_sha256="73d995350d3ceaf36a10d053a56960031a91462a7501db44605a8fe7f939c4f7" --> `edge:required:software-peft:developed_by:organization-huggingface` / `generated:software-peft:developed_by`
  - Edge: `software:peft --developed_by--> organization:huggingface`
  - Source URL: https://api.github.com/repos/huggingface/peft
  - Quote: ""full_name": "huggingface/peft","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2f25a8ac779751fd" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-peft:licensed_as:license-apache-2.0` / `generated:software-peft:licensed_as`
  - Edge: `software:peft --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/huggingface/peft
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="37713e952e1ffd22" quote_sha256="d8ccd4fcbeaed2db1c30a69e887eaccfd11506abeb7ae653216d60a2e9af55ef" --> `edge:required:software-pgvector:developed_by:organization-pgvector` / `generated:software-pgvector:developed_by`
  - Edge: `software:pgvector --developed_by--> organization:pgvector`
  - Source URL: https://api.github.com/repos/pgvector/pgvector
  - Quote: ""full_name": "pgvector/pgvector","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bb0dc5cfddfa46af" quote_sha256="8e5fba23d189c710e412fcad31a2f8a69abdc73f21cb96de72f83d0bf45735ef" --> `edge:required:software-pgvector:licensed_as:license-other-composite` / `generated:software-pgvector:licensed_as`
  - Edge: `software:pgvector --licensed_as--> license:other-composite`
  - Source URL: https://api.github.com/repos/pgvector/pgvector/license
  - Quote: ""license": { "name": "Other", "spdx_id": "NOASSERTION""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="aa24333474ebc15d" quote_sha256="18cfe12f358b88ea7f3fa63688b64d0834cd6d7f0d7a86184f9a8c6b0321fd32" --> `edge:required:software-promptflow:developed_by:organization-microsoft` / `generated:software-promptflow:developed_by`
  - Edge: `software:promptflow --developed_by--> organization:microsoft`
  - Source URL: https://api.github.com/repos/microsoft/promptflow
  - Quote: ""full_name": "microsoft/promptflow","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="11cd44590cc28863" quote_sha256="a0584e1bc3b61c46141330e922332042a604a262fa07447ceb5fa55750f09574" --> `edge:required:software-promptflow:licensed_as:license-mit` / `generated:software-promptflow:licensed_as`
  - Edge: `software:promptflow --licensed_as--> license:mit`
  - Source URL: https://api.github.com/repos/microsoft/promptflow
  - Quote: ""name": "MIT License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0f9ae0837e803bbe" quote_sha256="545ea8c5eb8767c004a2dd6bd29df49392a29c3cf78cc3ee2f2586c18b5d5022" --> `edge:required:software-pytorch-lightning:developed_by:organization-lightning-ai` / `generated:software-pytorch-lightning:developed_by`
  - Edge: `software:pytorch-lightning --developed_by--> organization:lightning-ai`
  - Source URL: https://api.github.com/repos/Lightning-AI/pytorch-lightning
  - Quote: ""full_name": "Lightning-AI/pytorch-lightning","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="9d1b11ac37291ed9" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-pytorch-lightning:licensed_as:license-apache-2.0` / `generated:software-pytorch-lightning:licensed_as`
  - Edge: `software:pytorch-lightning --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/Lightning-AI/pytorch-lightning
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="35aa996d7c42b60d" quote_sha256="cba66ceb08a3584b469f269416bf8a5b215d35df287ada41e0decf46fa42d15a" --> `edge:required:software-qdrant:developed_by:organization-qdrant` / `generated:software-qdrant:developed_by`
  - Edge: `software:qdrant --developed_by--> organization:qdrant`
  - Source URL: https://api.github.com/repos/qdrant/qdrant
  - Quote: ""full_name": "qdrant/qdrant","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fdb4fc9ba3da64a2" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-qdrant:licensed_as:license-apache-2.0` / `generated:software-qdrant:licensed_as`
  - Edge: `software:qdrant --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/qdrant/qdrant
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fc7c52b212ed54a4" quote_sha256="46161cc916788a8d4f0515230b4f576ffe51b13de84b0d2e4c5b7f6e5338c906" --> `edge:required:software-ragas:developed_by:organization-vibrantlabsai` / `generated:software-ragas:developed_by`
  - Edge: `software:ragas --developed_by--> organization:vibrantlabsai`
  - Source URL: https://api.github.com/repos/vibrantlabsai/ragas
  - Quote: ""full_name": "vibrantlabsai/ragas","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c4ff0d2958724d0b" quote_sha256="ecd33ec81a534db8cd284ea5f0788bd2b7fae834499a7655b7e3737622cf5d98" --> `edge:required:software-ragas:licensed_as:license-apache-2.0` / `generated:software-ragas:licensed_as`
  - Edge: `software:ragas --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/vibrantlabsai/ragas
  - Quote: ""name": "Apache License 2.0","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="a0575180149b1b47" quote_sha256="b819600bf204bc21eec5b6c8307654a39675a184766b54dcfed9d97912c4a583" --> `edge:required:software-ray:developed_by:organization-ray-project` / `generated:software-ray:developed_by`
  - Edge: `software:ray --developed_by--> organization:ray-project`
  - Source URL: https://api.github.com/repos/ray-project/ray
  - Quote: ""full_name": "ray-project/ray","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8203ecaa27baea74" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-ray:licensed_as:license-apache-2.0` / `generated:software-ray:licensed_as`
  - Edge: `software:ray --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/ray-project/ray
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="697dadd053d33be8" quote_sha256="c004bebd3db08d19c977d206c7ec348c8055498286ec863c1cb5027a3a86448c" --> `edge:required:software-sglang:developed_by:organization-sgl-project` / `generated:software-sglang:developed_by`
  - Edge: `software:sglang --developed_by--> organization:sgl-project`
  - Source URL: https://api.github.com/repos/sgl-project/sglang
  - Quote: ""full_name": "sgl-project/sglang","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="eab7546e5b52efc8" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-sglang:licensed_as:license-apache-2.0` / `generated:software-sglang:licensed_as`
  - Edge: `software:sglang --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/sgl-project/sglang
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bb312f61cb5b677f" quote_sha256="52db4d149d099998031ac416c39dedf6bfab9cd7a82fcdf288857e188ced0a93" --> `edge:required:software-text-generation-inference:developed_by:organization-huggingface` / `generated:software-text-generation-inference:developed_by`
  - Edge: `software:text-generation-inference --developed_by--> organization:huggingface`
  - Source URL: https://api.github.com/repos/huggingface/text-generation-inference
  - Quote: ""full_name": "huggingface/text-generation-inference","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="00cf3d2e7c569cbc" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-text-generation-inference:licensed_as:license-apache-2.0` / `generated:software-text-generation-inference:licensed_as`
  - Edge: `software:text-generation-inference --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/huggingface/text-generation-inference
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="473fd977b2defd0d" quote_sha256="0677358501235c19c0120c5c86618a2226f5cd9af4f2f8fcac448692ac369d92" --> `edge:required:software-triton-inference-server:developed_by:organization-triton-inference-server` / `generated:software-triton-inference-server:developed_by`
  - Edge: `software:triton-inference-server --developed_by--> organization:triton-inference-server`
  - Source URL: https://api.github.com/repos/triton-inference-server/server
  - Quote: ""full_name": "triton-inference-server/server","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="92136e8c5b0b8e0d" quote_sha256="b1411708db6b80b245b26daa8ce76e30021ea4111d18575cc020b52e34a4f80c" --> `edge:required:software-triton-inference-server:licensed_as:license-bsd-3-clause` / `generated:software-triton-inference-server:licensed_as`
  - Edge: `software:triton-inference-server --licensed_as--> license:bsd-3-clause`
  - Source URL: https://api.github.com/repos/triton-inference-server/server
  - Quote: ""name": "BSD 3-Clause \"New\" or \"Revised\" License""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="ddcad753768b612d" quote_sha256="ad75e310e4c023aaa7f856d82bce5b524ff6a7c7cc47f79bc329e67e140091f3" --> `edge:required:software-trl:developed_by:organization-huggingface` / `generated:software-trl:developed_by`
  - Edge: `software:trl --developed_by--> organization:huggingface`
  - Source URL: https://api.github.com/repos/huggingface/trl
  - Quote: ""full_name": "huggingface/trl","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="efcf98a03cc5a3a2" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-trl:licensed_as:license-apache-2.0` / `generated:software-trl:licensed_as`
  - Edge: `software:trl --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/huggingface/trl
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="a167af5b47658101" quote_sha256="4564240247ea6b3e8a917e0b63ef09cf381b3e19a3ea2400cecf172304027b8a" --> `edge:required:software-unsloth:developed_by:organization-unslothai` / `generated:software-unsloth:developed_by`
  - Edge: `software:unsloth --developed_by--> organization:unslothai`
  - Source URL: https://api.github.com/repos/unslothai/unsloth
  - Quote: ""full_name": "unslothai/unsloth","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="42272376ccbb80fc" quote_sha256="7281e216c5f39de70a3e6aef3f1e61b86dd91aea3ff7bec8b0439115efa65b96" --> `edge:required:software-unsloth:licensed_as:license-apache-2.0` / `generated:software-unsloth:licensed_as`
  - Edge: `software:unsloth --licensed_as--> license:apache-2.0`
  - Source URL: https://api.github.com/repos/unslothai/unsloth
  - Quote: ""name": "Apache License 2.0""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="fd73a35322230e79" quote_sha256="c5f716c2e1dc473fc94893900afebed59d9b6b726be8dde2f38f0eee8e771adf" --> `edge:required:software-vllm:developed_by:organization-vllm-project` / `generated:software-vllm:developed_by`
  - Edge: `software:vllm --developed_by--> organization:vllm-project`
  - Source URL: https://api.github.com/repos/vllm-project/vllm
  - Quote: ""full_name": "vllm-project/vllm","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c96a6ff6d1bde4a7" quote_sha256="3951e7980ebdf860520c23976a357994c7fdd2fa3ec6f876e944212e10002cb5" --> `edge:required:software-weaviate:developed_by:organization-weaviate` / `generated:software-weaviate:developed_by`
  - Edge: `software:weaviate --developed_by--> organization:weaviate`
  - Source URL: https://api.github.com/repos/weaviate/weaviate
  - Quote: ""full_name": "weaviate/weaviate","
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d8cbec79791c8565" quote_sha256="b1411708db6b80b245b26daa8ce76e30021ea4111d18575cc020b52e34a4f80c" --> `edge:required:software-weaviate:licensed_as:license-bsd-3-clause` / `generated:software-weaviate:licensed_as`
  - Edge: `software:weaviate --licensed_as--> license:bsd-3-clause`
  - Source URL: https://api.github.com/repos/weaviate/weaviate
  - Quote: ""name": "BSD 3-Clause \"New\" or \"Revised\" License""
  - Manual verification: quote directly supports the edge relationship.


## data/edges/software-data-benchmark.json

- [x] <!-- edge-quote-verification key="b773c8abcdef55c7" quote_sha256="b29b7ec5a92ea840a4dae4ed5786e3ff9cddac65b80c9880fb717a9eb5c745cf" --> `edge:diffusers-depends-on-pytorch` / `edge-source:diffusers-docs`
  - Edge: `software:diffusers --depends_on--> software:pytorch`
  - Source URL: https://raw.githubusercontent.com/huggingface/diffusers/main/README.md
  - Quote: "pip install --upgrade diffusers[torch]"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="417ab6ff9749475c" quote_sha256="4b5281b69a3b4a5c408086bc2da2b200fc8716d112a41adf3dc31537afabb586" --> `edge:diffusers-developed-by-hugging-face` / `edge-source:diffusers-github`
  - Edge: `software:diffusers --developed_by--> organization:hugging-face`
  - Source URL: https://api.github.com/repos/huggingface/diffusers
  - Quote: ""full_name":"huggingface/diffusers""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="b4e9aa173fae1a44" quote_sha256="55f12528ddd4240e797f6391c80f5cf883e9c281253ad296c30b97dd4810c0a6" --> `edge:diffusers-licensed-as-apache-2.0` / `edge-source:diffusers-license`
  - Edge: `software:diffusers --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/huggingface/diffusers/main/LICENSE
  - Quote: "Licensed under the Apache License, Version 2.0 (the "License");"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8500860efa8655b7" quote_sha256="7e9e514e4ad1ca7acfbc25fb37eec5dbef141326c58a19c427bb76ed496a1e28" --> `edge:gradio-developed-by-hugging-face` / `edge-source:gradio-hf-blog`
  - Edge: `software:gradio --developed_by--> organization:hugging-face`
  - Source URL: https://huggingface.co/blog/gradio-joins-hf
  - Quote: "Gradio is joining Hugging Face! By acquiring Gradio, a machine learning startup, Hugging Face will be able to offer users, developers, and data scientists the tools needed to get to high level results and create better models and tools..."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="a7b4587e3d72c829" quote_sha256="55f12528ddd4240e797f6391c80f5cf883e9c281253ad296c30b97dd4810c0a6" --> `edge:gradio-licensed-as-apache-2.0` / `edge-source:gradio-license`
  - Edge: `software:gradio --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/gradio-app/gradio/main/LICENSE
  - Quote: "Licensed under the Apache License, Version 2.0 (the "License");"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="bbdc811e2a2302ce" quote_sha256="0ae9942ac8cfe0df2f74b925bb60e2b117d7e1d83d96c6d43e75d07ad3218671" --> `edge:laion-5b-developed-by-laion` / `edge-source:laion-5b-infoq-release`
  - Edge: `dataset:laion-5b --developed_by--> organization:laion`
  - Source URL: https://www.infoq.com/news/2022/05/laion-5b-image-text-dataset/
  - Quote: "The Large-scale Artificial Intelligence Open Network (LAION) released LAION-5B , an AI training dataset containing over five billion image-text pairs."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d533cd3015005ab0" quote_sha256="e398238d92f6a8ca262f243fcba3b7f68d8551097f6694a0880d0a1e650befda" --> `edge:laion-5b-licensed-as-cc-by-4.0` / `edge-source:laion-5b-release`
  - Edge: `dataset:laion-5b --licensed_as--> license:cc-by-4.0`
  - Source URL: https://laion.ai/blog/laion-5b/
  - Quote: "License We distribute the metadata dataset (the parquet files) under the Creative Common CC-BY 4.0 license, which poses no particular restriction."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2de7baeef1858cf2" quote_sha256="d635a6060f4ef584c9a3e337508b055ea7ee8599e664a92fdd50863efc5059a8" --> `edge:librispeech-asr-uses-data-librispeech` / `edge-source:openslr-12`
  - Edge: `benchmark:librispeech-asr --uses_data--> dataset:librispeech`
  - Source URL: https://www.openslr.org/12
  - Quote: "LibriSpeech ASR corpus"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2e24a693780efcef" quote_sha256="7f0c5a83f94cccb0d4b29e81fc1b8340675ea45193cf5989919e4f16b4903126" --> `edge:librispeech-licensed-as-cc-by-4.0` / `edge-source:openslr-12`
  - Edge: `dataset:librispeech --licensed_as--> license:cc-by-4.0`
  - Source URL: https://www.openslr.org/12
  - Quote: "License: CC BY 4.0"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="94f12e51bc5f516c" quote_sha256="d876b5b929efe5d4dbcc20fc70443f4281babeae4022e99e040c12a261ba8fe8" --> `edge:litellm-implements-openai-compatible-api` / `edge-source:litellm-repo-description`
  - Edge: `software:litellm --implements--> software:openai-compatible-api`
  - Source URL: https://raw.githubusercontent.com/BerriAI/litellm/main/README.md
  - Quote: "LiteLLM is an open source AI Gateway that gives you a single, unified interface to call 100+ LLM providers — OpenAI, Anthropic, Gemini, Bedrock, Azure, and more — using the OpenAI format."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="2800a470818eea47" quote_sha256="1e877f89cf52f4dd29a76dedc77524b152c7cebeacd417875de76e78587f25ae" --> `edge:litellm-licensed-as-open-core` / `edge-source:litellm-license`
  - Edge: `software:litellm --licensed_as--> license:open-core-mit-enterprise`
  - Source URL: https://raw.githubusercontent.com/BerriAI/litellm/litellm_internal_staging/LICENSE
  - Quote: "Portions of this software are licensed as follows: * All content that resides under the "enterprise/" directory of this repository, if that directory exists, is licensed under the license defined in "enterprise/LICENSE". * Content outside of the above mentioned directories or restrictions above is available under the MIT license as defined below. --- MIT License"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="cc4df2dd3c8df16b" quote_sha256="f6b92518e6b3151c7dfe1d3a7c222cfa34712c1a73eab7a61d36fa91fd0311fd" --> `edge:llama.cpp-developed-by-ggml-org` / `edge-source:llama.cpp-github`
  - Edge: `software:llama.cpp --developed_by--> organization:ggml-org`
  - Source URL: https://api.github.com/repos/ggml-org/llama.cpp
  - Quote: ""full_name":"ggml-org/llama.cpp""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="56cbbbec41ecdabd" quote_sha256="abb2896dc3c2a9402f901b88d5035cf0a83d5cf7c17e73642cdf562b0b9d3bc5" --> `edge:llama.cpp-licensed-as-mit` / `edge-source:llama.cpp-license`
  - Edge: `software:llama.cpp --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/ggml-org/llama.cpp/master/LICENSE
  - Quote: "MIT License"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="7b4008b256080a3a" quote_sha256="2a3d19c5fa51877cf046fb07052b76b15a8e941cea648aa55fb7943266970ea2" --> `edge:ollama-depends-on-llama.cpp` / `edge-source:ollama-cmake`
  - Edge: `software:ollama --depends_on--> software:llama.cpp`
  - Source URL: https://raw.githubusercontent.com/ollama/ollama/main/CMakeLists.txt
  - Quote: "GGML backend for inference is provided by llama-server (built separately via llama/server/CMakeLists.txt using FetchContent from the pinned llama.cpp source)."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="76f788c9d99e0dde" quote_sha256="f4dd6004260b43f1180cbff340c6f80765a9de484e66ea3dc5ba580ab8dbbb40" --> `edge:ollama-developed-by-ollama` / `edge-source:ollama-github`
  - Edge: `software:ollama --developed_by--> organization:ollama`
  - Source URL: https://api.github.com/repos/ollama/ollama
  - Quote: ""full_name":"ollama/ollama""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="6aff8bdbf251facc" quote_sha256="edec1315091f08e638c38867e600c06150585d430d5bdf6b4f2c5710553dd696" --> `edge:ollama-implements-openai-compatible-api` / `edge-source:ollama-openai-compat-docs`
  - Edge: `software:ollama --implements--> software:openai-compatible-api`
  - Source URL: https://docs.ollama.com/api/openai-compatibility.md
  - Quote: "Ollama provides compatibility with parts of the [OpenAI API](https://platform.openai.com/docs/api-reference) to help connect existing applications to Ollama."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="184fa7d28f095401" quote_sha256="abb2896dc3c2a9402f901b88d5035cf0a83d5cf7c17e73642cdf562b0b9d3bc5" --> `edge:ollama-licensed-as-mit` / `edge-source:ollama-license`
  - Edge: `software:ollama --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/ollama/ollama/main/LICENSE
  - Quote: "MIT License"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="67a7e2a7a583725b" quote_sha256="472099263f31404a0db949486ebcfbc269560e0fb1f81af69ef486f30c1aaad7" --> `edge:pytorch-developed-by-pytorch-foundation` / `edge-source:pytorch-foundation`
  - Edge: `software:pytorch --developed_by--> organization:pytorch-foundation`
  - Source URL: https://pytorch.org/foundation
  - Quote: "From cutting-edge development to production-ready tools and libraries, the PyTorch Foundation thrives through transparent collaboration and collective innovation."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="1c13e4115d3ae38b" quote_sha256="a794c864c8eaebc93f89f19d9df99e5824379484ea90b62767158a57d9e53dea" --> `edge:pytorch-licensed-as-bsd-3-clause` / `edge-source:pytorch-license`
  - Edge: `software:pytorch --licensed_as--> license:bsd-3-clause`
  - Source URL: https://raw.githubusercontent.com/pytorch/pytorch/main/README.md
  - Quote: "PyTorch has a BSD-style license, as found in the [LICENSE](LICENSE) file."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="f5ba0253dcd0229e" quote_sha256="32c37543a75947327c6801534ecfe599ca489af4cd642594e759a4a864cf6881" --> `edge:swe-bench-uses-data-swe-bench-instances` / `edge-source:swe-bench-hf-api`
  - Edge: `benchmark:swe-bench --uses_data--> dataset:swe-bench-instances`
  - Source URL: https://huggingface.co/api/datasets/princeton-nlp/SWE-bench
  - Quote: "SWE-bench is a dataset that tests systems’ ability to solve GitHub issues automatically. The dataset collects 2,294 Issue-Pull Request pairs from 12 popular Python repositories."
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="d992d29d6f07f56f" quote_sha256="99091a3d0256c8dc9d2a124ecf335f18616a83e18ffdb49fc8935c10fb9fcab5" --> `edge:the-pile-developed-by-eleutherai` / `edge-source:pile-hf`
  - Edge: `dataset:the-pile --developed_by--> organization:eleutherai`
  - Source URL: https://huggingface.co/api/datasets/EleutherAI/pile
  - Quote: ""id":"EleutherAI/pile","author":"EleutherAI""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="36891612869ed95c" quote_sha256="abf951eb6d40b1ec05b8a62afd34fc868053f3b235fe11e6e26fd03c1bb3c6cd" --> `edge:transformers-depends-on-pytorch` / `edge-source:transformers-docs`
  - Edge: `software:transformers --depends_on--> software:pytorch`
  - Source URL: https://raw.githubusercontent.com/huggingface/transformers/main/README.md
  - Quote: "pip install "transformers[torch]""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="c0c87ae340c52f65" quote_sha256="263e826add249985971320eaf3ae6e008bb53ed45c625e20d88ecd28faa1b75c" --> `edge:transformers-developed-by-hugging-face` / `edge-source:transformers-github`
  - Edge: `software:transformers --developed_by--> organization:hugging-face`
  - Source URL: https://raw.githubusercontent.com/huggingface/transformers/main/README.md
  - Quote: "git clone https://github.com/huggingface/transformers.git"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="5a7ad84462f5482d" quote_sha256="55f12528ddd4240e797f6391c80f5cf883e9c281253ad296c30b97dd4810c0a6" --> `edge:transformers-licensed-as-apache-2.0` / `edge-source:transformers-license`
  - Edge: `software:transformers --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/huggingface/transformers/main/LICENSE
  - Quote: "Licensed under the Apache License, Version 2.0 (the "License");"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="0fabd955275cc43f" quote_sha256="43262c2dc900f394bd6e270f543d26462654d963f3d6052ff36ef9967a3388c2" --> `edge:vllm-depends-on-pytorch` / `edge-source:vllm-pyproject`
  - Edge: `software:vllm --depends_on--> software:pytorch`
  - Source URL: https://raw.githubusercontent.com/vllm-project/vllm/main/pyproject.toml
  - Quote: "[build-system] # Should be mirrored in requirements/build/cuda.txt requires = [ "cmake>=3.26.1", "ninja", "packaging>=24.2", "setuptools>=77.0.3,<81.0.0", "setuptools-scm>=8.0", "setuptools-rust>=1.9.0", "torch == 2.11.0", "wheel", "jinja2", ] build-backend = "setuptools.build_meta" [project] name = "vllm""
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="aa1f45afa07669c0" quote_sha256="7ecf9da26dacc97dfd6ccc1ceb613dc8346ed4854b284a41f31137db419707d3" --> `edge:vllm-implements-openai-compatible-api` / `edge-source:vllm-repo`
  - Edge: `software:vllm --implements--> software:openai-compatible-api`
  - Source URL: https://raw.githubusercontent.com/vllm-project/vllm/main/README.md
  - Quote: "- OpenAI-compatible API server, plus Anthropic Messages API and gRPC support"
  - Manual verification: quote directly supports the edge relationship.

- [x] <!-- edge-quote-verification key="8a733b784e639bb0" quote_sha256="55f12528ddd4240e797f6391c80f5cf883e9c281253ad296c30b97dd4810c0a6" --> `edge:vllm-licensed-as-apache-2.0` / `edge-source:vllm-license`
  - Edge: `software:vllm --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/vllm-project/vllm/main/LICENSE
  - Quote: "Licensed under the Apache License, Version 2.0 (the "License");"
  - Manual verification: quote directly supports the edge relationship.
