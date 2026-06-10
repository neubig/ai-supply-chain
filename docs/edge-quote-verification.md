# Edge Quote Verification Checklist

This checklist tracks manual review of quote-backed edge sources. Check a box only after verifying that the quoted text directly supports the edge relationship shown in the item.

Regenerate with `npm run generate:edge-checklist`. Existing checked boxes are preserved only when the edge/source key and quote hash are unchanged.

Note-only edge sources are excluded from this checklist because they are explicitly source-needed or undisclosed rather than quote-backed.

## Summary

- Quote-backed edge sources: 448
- Checked: 119
- Unchecked: 329

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

- [ ] <!-- edge-quote-verification key="7b8c619dfba1ef26" quote_sha256="bf346bf6da29b91271b39a1440c4b4847bd506aa827049eb34b8458c177517f6" --> `edge:required:benchmark-humaneval:uses_data:dataset-source-needed-benchmark-data` / `generated:benchmark-humaneval:uses_data`
  - Edge: `benchmark:humaneval --uses_data--> dataset:source-needed-benchmark-data`
  - Source URL: https://raw.githubusercontent.com/openai/human-eval/master/README.md
  - Quote: "This is an evaluation harness for the HumanEval problem solving dataset described in the paper "Evaluating Large Language Models Trained on Code"."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c08616b99ef251e5" quote_sha256="54ef7b5b108ef0f58938c2a69422c5b6e8c48c1a192322661cd4bcaa67005915" --> `edge:required:benchmark-lambada:developed_by:organization-source-needed-maintainer` / `generated:benchmark-lambada:developed_by`
  - Edge: `benchmark:lambada --developed_by--> organization:source-needed-maintainer`
  - Source URL: https://arxiv.org/abs/1606.06031
  - Quote: "Brain Sciences, University of Trento, (2) Institute for Logic, Language & Computation, University of Amsterdam) View a PDF of the paper titled The LAMBADA dataset: Word prediction requiring a broad discourse context, by Denis Paperno (1) and 12 other authors View PDF Abstract: We introduce LAMBADA, a dataset to evaluate the capabilities of computational models for text understanding by means of a word prediction task."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bd555ef3c281068e" quote_sha256="5952ca4303cccbd3048a4a9cd5a99ffd17485b0c2732586c8f8173f725d46ed4" --> `edge:required:benchmark-lambada:licensed_as:license-source-needed-license` / `generated:benchmark-lambada:licensed_as`
  - Edge: `benchmark:lambada --licensed_as--> license:source-needed-license`
  - Source URL: https://arxiv.org/abs/1606.06031
  - Quote: "arXiv is committed to these values and only works with partners that adhere to them."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="7af8df8eb0d6305d" quote_sha256="bf0583e7416c03c1ed04ab2c54eb763cf1959aa5826870a3a286084aaaa8d9d2" --> `edge:required:benchmark-lambada:uses_data:dataset-source-needed-benchmark-data` / `generated:benchmark-lambada:uses_data`
  - Edge: `benchmark:lambada --uses_data--> dataset:source-needed-benchmark-data`
  - Source URL: https://arxiv.org/abs/1606.06031
  - Quote: "[1606.06031] The LAMBADA dataset: Word prediction requiring a broad discourse context"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="450f692672631dd8" quote_sha256="7f0c5a83f94cccb0d4b29e81fc1b8340675ea45193cf5989919e4f16b4903126" --> `edge:required:benchmark-librispeech-asr:developed_by:organization-source-needed-maintainer` / `generated:benchmark-librispeech-asr:developed_by`
  - Edge: `benchmark:librispeech-asr --developed_by--> organization:source-needed-maintainer`
  - Source URL: https://www.openslr.org/12
  - Quote: "License: CC BY 4.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8ed9eb48bda49fbc" quote_sha256="7f0c5a83f94cccb0d4b29e81fc1b8340675ea45193cf5989919e4f16b4903126" --> `edge:required:benchmark-librispeech-asr:licensed_as:license-source-needed-license` / `generated:benchmark-librispeech-asr:licensed_as`
  - Edge: `benchmark:librispeech-asr --licensed_as--> license:source-needed-license`
  - Source URL: https://www.openslr.org/12
  - Quote: "License: CC BY 4.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a985a853a7a72afe" quote_sha256="5d1b7ec9ed23b007a8e624f34582038e4ba09433348d262adfb6c737e467a027" --> `edge:required:benchmark-mmlu:developed_by:organization-source-needed-maintainer` / `generated:benchmark-mmlu:developed_by`
  - Edge: `benchmark:mmlu --developed_by--> organization:source-needed-maintainer`
  - Source URL: https://arxiv.org/abs/2009.03300
  - Quote: "ast revised 12 Jan 2021 (this version, v3)] Title: Measuring Massive Multitask Language Understanding Authors: Dan Hendrycks , Collin Burns , Steven Basart , Andy Zou , Mantas Mazeika , Dawn Song , Jacob Steinhardt View a PDF of the paper titled Measuring Massive Multitask Language Understanding, by Dan Hendrycks and 6 other authors View PDF Abstract: We propose a new test to measure a text model's multitask accuracy."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fc526c11ac79060a" quote_sha256="5952ca4303cccbd3048a4a9cd5a99ffd17485b0c2732586c8f8173f725d46ed4" --> `edge:required:benchmark-mmlu:licensed_as:license-source-needed-license` / `generated:benchmark-mmlu:licensed_as`
  - Edge: `benchmark:mmlu --licensed_as--> license:source-needed-license`
  - Source URL: https://arxiv.org/abs/2009.03300
  - Quote: "arXiv is committed to these values and only works with partners that adhere to them."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6b69f19512ea49bf" quote_sha256="076967a4fadbe27ff5a584ba4822039e44727c71f56f162e464db7d8b8de61b3" --> `edge:required:benchmark-mteb:developed_by:organization-embeddings-benchmark` / `generated:benchmark-mteb:developed_by`
  - Edge: `benchmark:mteb --developed_by--> organization:embeddings-benchmark`
  - Source URL: https://raw.githubusercontent.com/embeddings-benchmark/mteb/main/README.md
  - Quote: "If you use any of the specific benchmarks, we also recommend that you cite the authors of both the benchmark and its tasks:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2c638ec2587ecfae" quote_sha256="33c6c4fbef91976c0089a09e7fbf93642fcf2bc9e71319f9d7451cce565484a0" --> `edge:required:benchmark-mteb:licensed_as:license-source-needed-license` / `generated:benchmark-mteb:licensed_as`
  - Edge: `benchmark:mteb --licensed_as--> license:source-needed-license`
  - Source URL: https://raw.githubusercontent.com/embeddings-benchmark/mteb/main/README.md
  - Quote: "\| 🤖 [Adding a model] \| How to submit a model to MTEB and to the leaderboard \|"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="166246aa649ce6d8" quote_sha256="e5da54e33f4bc13341e14d7a13d8884a8508b328fe09252a6cde31f1cd7ede65" --> `edge:required:benchmark-mteb:uses_data:dataset-source-needed-benchmark-data` / `generated:benchmark-mteb:uses_data`
  - Edge: `benchmark:mteb --uses_data--> dataset:source-needed-benchmark-data`
  - Source URL: https://raw.githubusercontent.com/embeddings-benchmark/mteb/main/README.md
  - Quote: "[Adding a dataset]: https://embeddings-benchmark.github.io/mteb/contributing/adding_a_dataset/"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e6b6db51b7f6de02" quote_sha256="b0172b6e081cc065c3eae12c0547bab1932fd55533e53997c04229ae7dfe672c" --> `edge:required:benchmark-swe-bench:developed_by:organization-source-needed-maintainer` / `generated:benchmark-swe-bench:developed_by`
  - Edge: `benchmark:swe-bench --developed_by--> organization:source-needed-maintainer`
  - Source URL: https://www.swebench.com/
  - Quote: "[03/2024] Released SWE-bench Lite [ Report ]"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ec2f27085f4be147" quote_sha256="ba315fc8ab45e9cf164d6e4800a512c6a786d1ee64d852914d149262e5c07ad3" --> `edge:required:benchmark-swe-bench:licensed_as:license-source-needed-license` / `generated:benchmark-swe-bench:licensed_as`
  - Edge: `benchmark:swe-bench --licensed_as--> license:source-needed-license`
  - Source URL: https://www.swebench.com/
  - Quote: "SWE-smith"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5893e7ae2895c731" quote_sha256="9b58ab69b08f98766849742a94b98cd42ec7db26c441f5ee0a013a40079b1bd9" --> `edge:required:benchmark-text-to-image-quality:developed_by:organization-spaces` / `generated:benchmark-text-to-image-quality:developed_by`
  - Edge: `benchmark:text-to-image-quality --developed_by--> organization:spaces`
  - Source URL: https://huggingface.co/spaces/ArtificialAnalysis/Text-to-Image-Leaderboard
  - Quote: "View a live leaderboard that ranks text‑to‑image generators and compare their sample outputs side by side in an interactive arena."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3ae1923ee8d16d96" quote_sha256="5f4e96a6a57fa4edf17c9a05abb1662c3e02d72e4532ce94edaf56ee6cfef709" --> `edge:required:benchmark-text-to-image-quality:uses_data:dataset-source-needed-benchmark-data` / `generated:benchmark-text-to-image-quality:uses_data`
  - Edge: `benchmark:text-to-image-quality --uses_data--> dataset:source-needed-benchmark-data`
  - Source URL: https://huggingface.co/spaces/ArtificialAnalysis/Text-to-Image-Leaderboard
  - Quote: "You just open the page—no text, images, or other input required—an."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="4511af4c51bec6cf" quote_sha256="1c4de447247b4af06d32c4640514b1ae11d9da6ab7bf3795de91a4a1159e2e91" --> `edge:required:dataset-laion-5b:hosted_by:infrastructure-source-needed-hosting` / `generated:dataset-laion-5b:hosted_by`
  - Edge: `dataset:laion-5b --hosted_by--> infrastructure:source-needed-hosting`
  - Source URL: https://laion.ai/blog/laion-5b/
  - Quote: "The repository with the training code and the model checkpoints can be found here: https://github."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a2c348fd90649514" quote_sha256="7f0c5a83f94cccb0d4b29e81fc1b8340675ea45193cf5989919e4f16b4903126" --> `edge:required:dataset-librispeech:developed_by:organization-source-needed-maintainer` / `generated:dataset-librispeech:developed_by`
  - Edge: `dataset:librispeech --developed_by--> organization:source-needed-maintainer`
  - Source URL: https://www.openslr.org/12
  - Quote: "License: CC BY 4.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="46fbcad440a0072d" quote_sha256="07ffb2a67463a11d95cd3b8fbfc5d3e70a4a9962d5fb8b9d04758ba6d06ea273" --> `edge:required:dataset-mistral-training-corpus:developed_by:organization-mistralai` / `generated:dataset-mistral-training-corpus:developed_by`
  - Edge: `dataset:mistral-training-corpus --developed_by--> organization:mistralai`
  - Source URL: https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3/raw/main/README.md
  - Quote: "base_model: mistralai/Mistral-7B-v0.3"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="434d444b9aa4d336" quote_sha256="83edd4a5d4cecf0f66a2f5c5c9bcafe695809e9f058783afe5602cc637881ff7" --> `edge:required:dataset-mistral-training-corpus:hosted_by:infrastructure-hugging-face-hub` / `generated:dataset-mistral-training-corpus:hosted_by`
  - Edge: `dataset:mistral-training-corpus --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3/raw/main/README.md
  - Quote: "If you want to use Hugging Face `transformers` to generate text, you can do something like this."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a0c679125f582e8b" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:dataset-mistral-training-corpus:licensed_as:license-source-needed-license` / `generated:dataset-mistral-training-corpus:licensed_as`
  - Edge: `dataset:mistral-training-corpus --licensed_as--> license:source-needed-license`
  - Source URL: https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d16ae4585b4fe79e" quote_sha256="15924f2efbe9279bea255c36bec4b049c5252ec32cc01f1072d61d35e0f1ff56" --> `edge:required:dataset-nomic-embed-training-data:developed_by:organization-nomic-ai` / `generated:dataset-nomic-embed-training-data:developed_by`
  - Edge: `dataset:nomic-embed-training-data --developed_by--> organization:nomic-ai`
  - Source URL: https://huggingface.co/nomic-ai/nomic-embed-text-v1.5/raw/main/README.md
  - Quote: "title={Nomic Embed: Training a Reproducible Long Context Text Embedder},"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="269fc14833a84fc4" quote_sha256="1dd23dcd97e908b125f7d761f5f827670d9623bd62f27398d980a528a38b08f2" --> `edge:required:dataset-nomic-embed-training-data:hosted_by:infrastructure-hugging-face-hub` / `generated:dataset-nomic-embed-training-data:hosted_by`
  - Edge: `dataset:nomic-embed-training-data --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/nomic-ai/nomic-embed-text-v1.5/raw/main/README.md
  - Quote: "import { pipeline, layer_norm } from '@huggingface/transformers';"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="03aa5f656439fc13" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:dataset-nomic-embed-training-data:licensed_as:license-source-needed-license` / `generated:dataset-nomic-embed-training-data:licensed_as`
  - Edge: `dataset:nomic-embed-training-data --licensed_as--> license:source-needed-license`
  - Source URL: https://huggingface.co/nomic-ai/nomic-embed-text-v1.5/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c1b6f01cffdf1dfe" quote_sha256="8c59111175704b96ba9c0e1adc7ac77e471e5b650fed3859b81231cdebbacf74" --> `edge:required:dataset-qwen2.5-training-corpus:developed_by:organization-qwen` / `generated:dataset-qwen2.5-training-corpus:developed_by`
  - Edge: `dataset:qwen2.5-training-corpus --developed_by--> organization:qwen`
  - Source URL: https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/raw/main/README.md
  - Quote: "{"role": "system", "content": "You are Qwen, created by Alibaba Cloud. You are a helpful assistant."},"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="7a709934e91a044f" quote_sha256="bd81cdc625911929fe2f700c0090e10d8304c6ea8671e2940eecbff12edba724" --> `edge:required:dataset-qwen2.5-training-corpus:hosted_by:infrastructure-hugging-face-hub` / `generated:dataset-qwen2.5-training-corpus:hosted_by`
  - Edge: `dataset:qwen2.5-training-corpus --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/raw/main/README.md
  - Quote: "The code of Qwen2.5 has been in the latest Hugging face `transformers` and we advise you to use the latest version of `transformers`."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6ba690785a240c3e" quote_sha256="a22cfc8bea91bcfd1982edc8bca21ca0eb8dae7c4407a8382decbaa4996a7494" --> `edge:required:dataset-qwen2.5-training-corpus:licensed_as:license-source-needed-license` / `generated:dataset-qwen2.5-training-corpus:licensed_as`
  - Edge: `dataset:qwen2.5-training-corpus --licensed_as--> license:source-needed-license`
  - Source URL: https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/raw/main/README.md
  - Quote: "license_link: https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/blob/main/LICENSE"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="1c692350d83b630e" quote_sha256="b0172b6e081cc065c3eae12c0547bab1932fd55533e53997c04229ae7dfe672c" --> `edge:required:dataset-swe-bench-instances:developed_by:organization-source-needed-maintainer` / `generated:dataset-swe-bench-instances:developed_by`
  - Edge: `dataset:swe-bench-instances --developed_by--> organization:source-needed-maintainer`
  - Source URL: https://www.swebench.com/
  - Quote: "[03/2024] Released SWE-bench Lite [ Report ]"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c97b0a280f8dd31b" quote_sha256="ba315fc8ab45e9cf164d6e4800a512c6a786d1ee64d852914d149262e5c07ad3" --> `edge:required:dataset-swe-bench-instances:licensed_as:license-source-needed-license` / `generated:dataset-swe-bench-instances:licensed_as`
  - Edge: `dataset:swe-bench-instances --licensed_as--> license:source-needed-license`
  - Source URL: https://www.swebench.com/
  - Quote: "SWE-smith"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d439a1569367dec0" quote_sha256="787d11178ce30397c71d6c67c51f40a76429d429da300c1b825160fc4098d09f" --> `edge:required:dataset-whisper-web-audio:developed_by:organization-openai` / `generated:dataset-whisper-web-audio:developed_by`
  - Edge: `dataset:whisper-web-audio --developed_by--> organization:openai`
  - Source URL: https://raw.githubusercontent.com/openai/whisper/main/README.md
  - Quote: "Whisper's code and model weights are released under the MIT License. See LICENSE for further details."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bfcb82892533a3db" quote_sha256="9290a4c93d0da10ccd9fa51fd8497126db1d2490edd2c553176c83193378b755" --> `edge:required:dataset-whisper-web-audio:hosted_by:infrastructure-source-needed-hosting` / `generated:dataset-whisper-web-audio:hosted_by`
  - Edge: `dataset:whisper-web-audio --hosted_by--> infrastructure:source-needed-hosting`
  - Source URL: https://raw.githubusercontent.com/openai/whisper/main/README.md
  - Quote: "[[Model card]](https://github.com/openai/whisper/blob/main/model-card.md)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="511576a5226a154b" quote_sha256="787d11178ce30397c71d6c67c51f40a76429d429da300c1b825160fc4098d09f" --> `edge:required:dataset-whisper-web-audio:licensed_as:license-source-needed-license` / `generated:dataset-whisper-web-audio:licensed_as`
  - Edge: `dataset:whisper-web-audio --licensed_as--> license:source-needed-license`
  - Source URL: https://raw.githubusercontent.com/openai/whisper/main/README.md
  - Quote: "Whisper's code and model weights are released under the MIT License. See LICENSE for further details."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d879dd3436596d51" quote_sha256="9b6fb4ef3a4d7678043063aa6ecd1b9a436327ee8dcfdb533f945095f33702c4" --> `edge:required:model-all-minilm-l6-v2:developed_by:organization-sentence-transformers` / `generated:model-all-minilm-l6-v2:developed_by`
  - Edge: `model:all-minilm-l6-v2 --developed_by--> organization:sentence-transformers`
  - Source URL: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2/raw/main/README.md
  - Quote: "model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bed5edcce3b116e5" quote_sha256="c0b030c6ff9e7a928b370f6928cacdf03c3a201d984a3ccdf91d1fe299117c16" --> `edge:required:model-all-minilm-l6-v2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-all-minilm-l6-v2:hosted_by`
  - Edge: `model:all-minilm-l6-v2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2/raw/main/README.md
  - Quote: "# Load model from HuggingFace Hub tokenizer = AutoTokenizer.from_pretrained('sentence-transformers/all-MiniLM-L6-v2') model = AutoModel.from_pretrained('sentence-transformers/all-MiniLM-L6-v2')"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="70d5bb9bf857c022" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-all-minilm-l6-v2:licensed_as:license-apache-2.0` / `generated:model-all-minilm-l6-v2:licensed_as`
  - Edge: `model:all-minilm-l6-v2 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f3329e7ae6a5775a" quote_sha256="f0f7cd57172f66648d6c039ce4c861d20ef71f7756aac093017a071454206010" --> `edge:required:model-all-minilm-l6-v2:trained_on:dataset-source-needed-training-data` / `generated:model-all-minilm-l6-v2:trained_on`
  - Edge: `model:all-minilm-l6-v2 --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2/raw/main/README.md
  - Quote: "The project aims to train sentence embedding models on very large sentence level datasets using a self-supervised contrastive learning objective. We used the pretrained `nreimers/MiniLM-L6-H384-uncased` model and fine-tuned in on a 1B sentence pairs dataset. We use a contrastive learning objective: given a sentence from the pair, the model should predict which out of a set of randomly sampled other sentences, was actually paired with it in our dataset."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8ca1561b27c8068f" quote_sha256="69b0410a4901a00a680b3f4e4a30d02520f196e86f03d6f452da4f858829d576" --> `edge:required:model-all-minilm-l6-v2:trained_with:software-source-needed-training-framework` / `generated:model-all-minilm-l6-v2:trained_with`
  - Edge: `model:all-minilm-l6-v2 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2/raw/main/README.md
  - Quote: "We use the pretrained `nreimers/MiniLM-L6-H384-uncased` model. Please refer to the model card for more detailed information about the pre-training procedure."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e4e58517cfa8be36" quote_sha256="c43c373f64239454f7bc4fabdd1816e13185eb1afc1bfab2536a59e101b2b851" --> `edge:required:model-bark-small:developed_by:organization-suno` / `generated:model-bark-small:developed_by`
  - Edge: `model:bark-small --developed_by--> organization:suno`
  - Source URL: https://huggingface.co/suno/bark-small/raw/main/README.md
  - Quote: "Bark is a transformer-based text-to-audio model created by Suno."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e376a1ccc52a5b71" quote_sha256="f7b22d78edf125e362e53fa8e42bfe841f16ffa5c467963d8a01e76752f707a8" --> `edge:required:model-bark-small:hosted_by:infrastructure-hugging-face-hub` / `generated:model-bark-small:hosted_by`
  - Edge: `model:bark-small --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/suno/bark-small/raw/main/README.md
  - Quote: "* Hugging Face Demo:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3fc81a65bf63ad27" quote_sha256="dc5241953241b18e072cf68220fe24fbae17d6cf856bab08b38b4f07865829d2" --> `edge:required:model-bark-small:licensed_as:license-mit` / `generated:model-bark-small:licensed_as`
  - Edge: `model:bark-small --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/suno/bark-small/raw/main/README.md
  - Quote: "Bark is licensed under the MIT License, meaning it's available for commercial use."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d8dce0208063dde7" quote_sha256="28304013212030e1608a445778ff5b461d62c0f1581f5ecca9ebe5bcac38dde7" --> `edge:required:model-bark-small:trained_with:software-source-needed-training-framework` / `generated:model-bark-small:trained_with`
  - Edge: `model:bark-small --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/suno/bark-small/raw/main/README.md
  - Quote: "synthesiser = pipeline("text-to-speech", "suno/bark-small")"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fff3803bb76bafa2" quote_sha256="05c0d4767332f90ab92230a52e303e92acc17aeb8a4aa5e0086813961fdc758c" --> `edge:required:model-bge-base-en-v1.5:developed_by:organization-baai` / `generated:model-bge-base-en-v1.5:developed_by`
  - Edge: `model:bge-base-en-v1.5 --developed_by--> organization:baai`
  - Source URL: https://huggingface.co/BAAI/bge-base-en-v1.5/raw/main/README.md
  - Quote: "- **New reranker model**: release cross-encoder models `BAAI/bge-reranker-base` and `BAAI/bge-reranker-large`, which are more powerful than embedding model. We recommend to use/fine-tune them to re-rank top-k documents returned by embedding models."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2cbee357b5ec377f" quote_sha256="c5106e0b2f8e0535a3cbfcb6af7c8d3d294b0fbe4888632898694a582118da27" --> `edge:required:model-bge-base-en-v1.5:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-bge-base-en-v1.5:evaluated_on`
  - Edge: `model:bge-base-en-v1.5 --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/BAAI/bge-base-en-v1.5/raw/main/README.md
  - Quote: "`baai-general-embedding` models achieve **state-of-the-art performance on both MTEB and C-MTEB leaderboard!** For more details and evaluation tools see our scripts."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ce52247ef455b6cf" quote_sha256="97eeb69dcfb769cb2c7b2250081475ab98d04c13d3c1113be31bb7a81df18e8a" --> `edge:required:model-bge-base-en-v1.5:hosted_by:infrastructure-hugging-face-hub` / `generated:model-bge-base-en-v1.5:hosted_by`
  - Edge: `model:bge-base-en-v1.5 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/BAAI/bge-base-en-v1.5/raw/main/README.md
  - Quote: "# Load model from HuggingFace Hub tokenizer = AutoTokenizer.from_pretrained('BAAI/bge-large-zh-v1.5') model = AutoModel.from_pretrained('BAAI/bge-large-zh-v1.5') model.eval()"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="1fd160b236f39cac" quote_sha256="b51914c64134e9930ed03e057c4a31c6a9e1be726a44d8ff4d46effe77f32ae7" --> `edge:required:model-bge-base-en-v1.5:licensed_as:license-mit` / `generated:model-bge-base-en-v1.5:licensed_as`
  - Edge: `model:bge-base-en-v1.5 --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/BAAI/bge-base-en-v1.5/raw/main/README.md
  - Quote: "FlagEmbedding is licensed under the MIT License. The released models can be used for commercial purposes free of charge."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="802b025a5e3b11e5" quote_sha256="1f052405ebec10492dcd91a0967af05bc8f8a6ce8474d5a745ae3c668b9dc7cc" --> `edge:required:model-bge-base-en-v1.5:trained_on:dataset-source-needed-training-data` / `generated:model-bge-base-en-v1.5:trained_on`
  - Edge: `model:bge-base-en-v1.5 --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/BAAI/bge-base-en-v1.5/raw/main/README.md
  - Quote: "- 09/15/2023: The technical report and massive training data of BGE has been released"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8254e5d9997c0d4c" quote_sha256="2af83d5ddddd1baa21e2984e05e855ece05184becc2ce8265246f52e48314ab4" --> `edge:required:model-bge-base-en-v1.5:trained_with:software-source-needed-training-framework` / `generated:model-bge-base-en-v1.5:trained_with`
  - Edge: `model:bge-base-en-v1.5 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/BAAI/bge-base-en-v1.5/raw/main/README.md
  - Quote: "More training details for bge see baai_general_embedding."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="52c68f591d5319ad" quote_sha256="05c0d4767332f90ab92230a52e303e92acc17aeb8a4aa5e0086813961fdc758c" --> `edge:required:model-bge-large-en-v1.5:developed_by:organization-baai` / `generated:model-bge-large-en-v1.5:developed_by`
  - Edge: `model:bge-large-en-v1.5 --developed_by--> organization:baai`
  - Source URL: https://huggingface.co/BAAI/bge-large-en-v1.5/raw/main/README.md
  - Quote: "- **New reranker model**: release cross-encoder models `BAAI/bge-reranker-base` and `BAAI/bge-reranker-large`, which are more powerful than embedding model. We recommend to use/fine-tune them to re-rank top-k documents returned by embedding models."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3bf31f1e007be9bc" quote_sha256="c5106e0b2f8e0535a3cbfcb6af7c8d3d294b0fbe4888632898694a582118da27" --> `edge:required:model-bge-large-en-v1.5:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-bge-large-en-v1.5:evaluated_on`
  - Edge: `model:bge-large-en-v1.5 --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/BAAI/bge-large-en-v1.5/raw/main/README.md
  - Quote: "`baai-general-embedding` models achieve **state-of-the-art performance on both MTEB and C-MTEB leaderboard!** For more details and evaluation tools see our scripts."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e007a34707152006" quote_sha256="97eeb69dcfb769cb2c7b2250081475ab98d04c13d3c1113be31bb7a81df18e8a" --> `edge:required:model-bge-large-en-v1.5:hosted_by:infrastructure-hugging-face-hub` / `generated:model-bge-large-en-v1.5:hosted_by`
  - Edge: `model:bge-large-en-v1.5 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/BAAI/bge-large-en-v1.5/raw/main/README.md
  - Quote: "# Load model from HuggingFace Hub tokenizer = AutoTokenizer.from_pretrained('BAAI/bge-large-zh-v1.5') model = AutoModel.from_pretrained('BAAI/bge-large-zh-v1.5') model.eval()"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fd62f6cb11aa2afd" quote_sha256="b51914c64134e9930ed03e057c4a31c6a9e1be726a44d8ff4d46effe77f32ae7" --> `edge:required:model-bge-large-en-v1.5:licensed_as:license-mit` / `generated:model-bge-large-en-v1.5:licensed_as`
  - Edge: `model:bge-large-en-v1.5 --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/BAAI/bge-large-en-v1.5/raw/main/README.md
  - Quote: "FlagEmbedding is licensed under the MIT License. The released models can be used for commercial purposes free of charge."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="570f79f681aa07f7" quote_sha256="1f052405ebec10492dcd91a0967af05bc8f8a6ce8474d5a745ae3c668b9dc7cc" --> `edge:required:model-bge-large-en-v1.5:trained_on:dataset-source-needed-training-data` / `generated:model-bge-large-en-v1.5:trained_on`
  - Edge: `model:bge-large-en-v1.5 --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/BAAI/bge-large-en-v1.5/raw/main/README.md
  - Quote: "- 09/15/2023: The technical report and massive training data of BGE has been released"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="80089f3e880e005b" quote_sha256="2af83d5ddddd1baa21e2984e05e855ece05184becc2ce8265246f52e48314ab4" --> `edge:required:model-bge-large-en-v1.5:trained_with:software-source-needed-training-framework` / `generated:model-bge-large-en-v1.5:trained_with`
  - Edge: `model:bge-large-en-v1.5 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/BAAI/bge-large-en-v1.5/raw/main/README.md
  - Quote: "More training details for bge see baai_general_embedding."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="91917d5b6fbb9bb8" quote_sha256="05c0d4767332f90ab92230a52e303e92acc17aeb8a4aa5e0086813961fdc758c" --> `edge:required:model-bge-reranker-large:developed_by:organization-baai` / `generated:model-bge-reranker-large:developed_by`
  - Edge: `model:bge-reranker-large --developed_by--> organization:baai`
  - Source URL: https://huggingface.co/BAAI/bge-reranker-large/raw/main/README.md
  - Quote: "- **New reranker model**: release cross-encoder models `BAAI/bge-reranker-base` and `BAAI/bge-reranker-large`, which are more powerful than embedding model. We recommend to use/fine-tune them to re-rank top-k documents returned by embedding models."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bc964c84d290f4eb" quote_sha256="097b0e8c88a37df1cc3e31e69e779045121b9e42c6dd6a369e17e12ad4ed12f1" --> `edge:required:model-bge-reranker-large:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-bge-reranker-large:evaluated_on`
  - Edge: `model:bge-reranker-large --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/BAAI/bge-reranker-large/raw/main/README.md
  - Quote: "- 3/18/2024: Release new rerankers, built upon powerful M3 and LLM (GEMMA and MiniCPM, not so large actually) backbones, supporitng multi-lingual processing and larger inputs, massive improvements of ranking performances on BEIR, C-MTEB/Retrieval, MIRACL, LlamaIndex Evaluation."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fa49001bc263b015" quote_sha256="97eeb69dcfb769cb2c7b2250081475ab98d04c13d3c1113be31bb7a81df18e8a" --> `edge:required:model-bge-reranker-large:hosted_by:infrastructure-hugging-face-hub` / `generated:model-bge-reranker-large:hosted_by`
  - Edge: `model:bge-reranker-large --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/BAAI/bge-reranker-large/raw/main/README.md
  - Quote: "# Load model from HuggingFace Hub tokenizer = AutoTokenizer.from_pretrained('BAAI/bge-large-zh-v1.5') model = AutoModel.from_pretrained('BAAI/bge-large-zh-v1.5') model.eval()"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ef9119ac101d72e9" quote_sha256="b51914c64134e9930ed03e057c4a31c6a9e1be726a44d8ff4d46effe77f32ae7" --> `edge:required:model-bge-reranker-large:licensed_as:license-mit` / `generated:model-bge-reranker-large:licensed_as`
  - Edge: `model:bge-reranker-large --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/BAAI/bge-reranker-large/raw/main/README.md
  - Quote: "FlagEmbedding is licensed under the MIT License. The released models can be used for commercial purposes free of charge."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c6f39849bf098800" quote_sha256="bfaf06965240e7aa936826917e729fde17763ad30ebfe20c7e35884bff83bf05" --> `edge:required:model-bge-reranker-large:trained_on:dataset-source-needed-training-data` / `generated:model-bge-reranker-large:trained_on`
  - Edge: `model:bge-reranker-large --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/BAAI/bge-reranker-large/raw/main/README.md
  - Quote: "- 09/15/2023: The massive training data of BGE has been released"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0a5ebd83dda0ee0c" quote_sha256="2af83d5ddddd1baa21e2984e05e855ece05184becc2ce8265246f52e48314ab4" --> `edge:required:model-bge-reranker-large:trained_with:software-source-needed-training-framework` / `generated:model-bge-reranker-large:trained_with`
  - Edge: `model:bge-reranker-large --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/BAAI/bge-reranker-large/raw/main/README.md
  - Quote: "More training details for bge see baai_general_embedding."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8cd4c2eb51be1031" quote_sha256="383f8fc8ddd2da79e00c766dfa61b23fd74deaaf6ee2be2ce15c75026e93aba4" --> `edge:required:model-codegen-350m-mono:developed_by:organization-salesforce` / `generated:model-codegen-350m-mono:developed_by`
  - Edge: `model:codegen-350m-mono --developed_by--> organization:salesforce`
  - Source URL: https://huggingface.co/Salesforce/codegen-350M-mono/raw/main/README.md
  - Quote: "CodeGen is a family of autoregressive language models for **program synthesis** from the paper: A Conversational Paradigm for Program Synthesis by Erik Nijkamp, Bo Pang, Hiroaki Hayashi, Lifu Tu, Huan Wang, Yingbo Zhou, Silvio Savarese, Caiming Xiong. The models are originally released in this repository, under 3 pre-training data variants (`NL`, `Multi`, `Mono`) and 4 model size variants (`350M`, `2B`, `6B`, `16B`)."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d920d51ba807034d" quote_sha256="e139ada6bfdc61f7fbb451588fa919f357e03b5e97b24b5e522e0d9de70c1445" --> `edge:required:model-codegen-350m-mono:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-codegen-350m-mono:evaluated_on`
  - Edge: `model:codegen-350m-mono --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/Salesforce/codegen-350M-mono/raw/main/README.md
  - Quote: "## Evaluation results"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="250af6bbfe04eb65" quote_sha256="6b6fd19246f57e3d3b188e835df8617e75adea1990d329ec5d248733b174f473" --> `edge:required:model-codegen-350m-mono:hosted_by:infrastructure-hugging-face-hub` / `generated:model-codegen-350m-mono:hosted_by`
  - Edge: `model:codegen-350m-mono --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Salesforce/codegen-350M-mono/raw/main/README.md
  - Quote: "The checkpoint included in this repository is denoted as **CodeGen-Mono 350M** in the paper, where "Mono" means the model is initialized with *CodeGen-Multi 350M* and further pre-trained on a Python programming language dataset, and "350M" refers to the number of trainable parameters."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="63e6d4086e1140f3" quote_sha256="0aaccbc2c324de9763bc816ef259f666f5a09856e2dbe91a83830fadb87771e6" --> `edge:required:model-codegen-350m-mono:licensed_as:license-bsd-3-clause` / `generated:model-codegen-350m-mono:licensed_as`
  - Edge: `model:codegen-350m-mono --licensed_as--> license:bsd-3-clause`
  - Source URL: https://huggingface.co/Salesforce/codegen-350M-mono/raw/main/README.md
  - Quote: "license: bsd-3-clause"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f6b867a24d9ebeb1" quote_sha256="02362ba52ceffbcfdb908bf6673f1a8b95e0099c1dc04237bbc6d2748bf10f6f" --> `edge:required:model-codegen-350m-mono:trained_on:dataset-source-needed-training-data` / `generated:model-codegen-350m-mono:trained_on`
  - Edge: `model:codegen-350m-mono --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/Salesforce/codegen-350M-mono/raw/main/README.md
  - Quote: "This checkpoint (CodeGen-Mono 350M) was firstly initialized with *CodeGen-Multi 350M*, and then pre-trained on BigPython dataset. The data consists of 71.7B tokens of Python programming language. See Section 2.1 of the paper for more details."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8eb1d6dc199e4a4f" quote_sha256="383f8fc8ddd2da79e00c766dfa61b23fd74deaaf6ee2be2ce15c75026e93aba4" --> `edge:required:model-codegen-350m-mono:trained_with:software-source-needed-training-framework` / `generated:model-codegen-350m-mono:trained_with`
  - Edge: `model:codegen-350m-mono --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/Salesforce/codegen-350M-mono/raw/main/README.md
  - Quote: "CodeGen is a family of autoregressive language models for **program synthesis** from the paper: A Conversational Paradigm for Program Synthesis by Erik Nijkamp, Bo Pang, Hiroaki Hayashi, Lifu Tu, Huan Wang, Yingbo Zhou, Silvio Savarese, Caiming Xiong. The models are originally released in this repository, under 3 pre-training data variants (`NL`, `Multi`, `Mono`) and 4 model size variants (`350M`, `2B`, `6B`, `16B`)."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d0dc007962a7b3c3" quote_sha256="6b9e559d3608a01e7cb477f3475c529f285afa90fb467ec7ced34b7432285275" --> `edge:required:model-codellama-7b-instruct:developed_by:organization-codellama` / `generated:model-codellama-7b-instruct:developed_by`
  - Edge: `model:codellama-7b-instruct --developed_by--> organization:codellama`
  - Source URL: https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf/raw/main/README.md
  - Quote: "*Note: Use of this model is governed by the Meta license. Meta developed and publicly released the Code Llama family of large language models (LLMs)."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="9ae800e0fb1bdaf5" quote_sha256="33b5f85d867b7309713ddc1a43f8f5d5b9c961f039490046eb07d9bcc0de7afe" --> `edge:required:model-codellama-7b-instruct:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-codellama-7b-instruct:evaluated_on`
  - Edge: `model:codellama-7b-instruct --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf/raw/main/README.md
  - Quote: "## Evaluation Results"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="069ab53afc6cf42f" quote_sha256="78a66f62cf33d7bce6a9797ec46334a44befbc14b80c83c3165e10245aa3b1da" --> `edge:required:model-codellama-7b-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-codellama-7b-instruct:hosted_by`
  - Edge: `model:codellama-7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf/raw/main/README.md
  - Quote: "Code Llama is a collection of pretrained and fine-tuned generative text models ranging in scale from 7 billion to 34 billion parameters. This is the repository for the 7B instruct-tuned version in the Hugging Face Transformers format. This model is designed for general code synthesis and understanding. Links to other models can be found in the index at the bottom."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="02c13fe88e4214db" quote_sha256="e48c9f794cdf663dc5b87ef273bfed55f3efe311c510651eaba79eb0d9739585" --> `edge:required:model-codellama-7b-instruct:licensed_as:license-other-composite` / `generated:model-codellama-7b-instruct:licensed_as`
  - Edge: `model:codellama-7b-instruct --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf/raw/main/README.md
  - Quote: "license: llama2"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="96c124a68af5307c" quote_sha256="d87fb7351d0fa2fbeaf1bb04849b29038f856a29962f1ea5d0df0b79f25d965f" --> `edge:required:model-codellama-7b-instruct:trained_on:dataset-source-needed-training-data` / `generated:model-codellama-7b-instruct:trained_on`
  - Edge: `model:codellama-7b-instruct --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf/raw/main/README.md
  - Quote: "**Status** This is a static model trained on an offline dataset. Future versions of Code Llama - Instruct will be released as we improve model safety with community feedback."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5d353e2303ff3469" quote_sha256="3ae5e29ca2323dcb92dc565120d517d7289a7d5b2879ded563a1ffa16c5ee318" --> `edge:required:model-codellama-7b-instruct:trained_with:software-source-needed-training-framework` / `generated:model-codellama-7b-instruct:trained_with`
  - Edge: `model:codellama-7b-instruct --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf/raw/main/README.md
  - Quote: "## Hardware and Software **Training Factors** We used custom training libraries. The training and fine-tuning of the released models have been performed Meta’s Research Super Cluster."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="99ee753677c844d3" quote_sha256="ba9bd63ec4f7e54c4238d5515cac0f7182658dd3fc3dc6777dc3e860e0044b9e" --> `edge:required:model-deepseek-coder-6.7b-instruct:developed_by:organization-deepseek-ai` / `generated:model-deepseek-coder-6.7b-instruct:developed_by`
  - Edge: `model:deepseek-coder-6.7b-instruct --developed_by--> organization:deepseek-ai`
  - Source URL: https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct/raw/main/README.md
  - Quote: "tokenizer = AutoTokenizer.from_pretrained("deepseek-ai/deepseek-coder-6.7b-instruct", trust_remote_code=True)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0ccd24f6501d1e5c" quote_sha256="95024094e89569c38cff31818116ab1ea4397be7c150fe0d95097c6e5c09c2d1" --> `edge:required:model-deepseek-coder-6.7b-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-deepseek-coder-6.7b-instruct:hosted_by`
  - Edge: `model:deepseek-coder-6.7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct/raw/main/README.md
  - Quote: "### 2. Model Summary deepseek-coder-6.7b-instruct is a 6.7B parameter model initialized from deepseek-coder-6.7b-base and fine-tuned on 2B tokens of instruction data. - **Home Page:** DeepSeek - **Repository:** deepseek-ai/deepseek-coder - **Chat With DeepSeek Coder:** DeepSeek-Coder"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e5a25247056899ea" quote_sha256="657db19f6d074a858352cb0513a683561842b5e982309da64bc5c51260c393fd" --> `edge:required:model-deepseek-coder-6.7b-instruct:licensed_as:license-other-composite` / `generated:model-deepseek-coder-6.7b-instruct:licensed_as`
  - Edge: `model:deepseek-coder-6.7b-instruct --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct/raw/main/README.md
  - Quote: "This code repository is licensed under the MIT License. The use of DeepSeek Coder models is subject to the Model License. DeepSeek Coder supports commercial use."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d94d030cb80dc985" quote_sha256="bbd929b03599d3041831c52f975abce7c0a3169b1fe9f263464b54827fe9e69f" --> `edge:required:model-deepseek-coder-6.7b-instruct:trained_on:dataset-source-needed-training-data` / `generated:model-deepseek-coder-6.7b-instruct:trained_on`
  - Edge: `model:deepseek-coder-6.7b-instruct --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct/raw/main/README.md
  - Quote: "- **Massive Training Data**: Trained from scratch fon 2T tokens, including 87% code and 13% linguistic data in both English and Chinese languages."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0c8fba08faf6a438" quote_sha256="bbd929b03599d3041831c52f975abce7c0a3169b1fe9f263464b54827fe9e69f" --> `edge:required:model-deepseek-coder-6.7b-instruct:trained_with:software-source-needed-training-framework` / `generated:model-deepseek-coder-6.7b-instruct:trained_with`
  - Edge: `model:deepseek-coder-6.7b-instruct --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct/raw/main/README.md
  - Quote: "- **Massive Training Data**: Trained from scratch fon 2T tokens, including 87% code and 13% linguistic data in both English and Chinese languages."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="af324c1677a19640" quote_sha256="c275d36190db029b644ef2287ceddb4e2438dcc08d61bf17c644c1c9291aca3c" --> `edge:required:model-deepseek-r1-distill-qwen-7b:developed_by:organization-deepseek-ai` / `generated:model-deepseek-r1-distill-qwen-7b:developed_by`
  - Edge: `model:deepseek-r1-distill-qwen-7b --developed_by--> organization:deepseek-ai`
  - Source URL: https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B/raw/main/README.md
  - Quote: "- Using the reasoning data generated by DeepSeek-R1, we fine-tuned several dense models that are widely used in the research community. The evaluation results demonstrate that the distilled smaller dense models perform exceptionally well on benchmarks. We open-source distilled 1.5B, 7B, 8B, 14B, 32B, and 70B checkpoints based on Qwen2.5 and Llama3 series to the community."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5b376a0a0918dd69" quote_sha256="c275d36190db029b644ef2287ceddb4e2438dcc08d61bf17c644c1c9291aca3c" --> `edge:required:model-deepseek-r1-distill-qwen-7b:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-deepseek-r1-distill-qwen-7b:evaluated_on`
  - Edge: `model:deepseek-r1-distill-qwen-7b --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B/raw/main/README.md
  - Quote: "- Using the reasoning data generated by DeepSeek-R1, we fine-tuned several dense models that are widely used in the research community. The evaluation results demonstrate that the distilled smaller dense models perform exceptionally well on benchmarks. We open-source distilled 1.5B, 7B, 8B, 14B, 32B, and 70B checkpoints based on Qwen2.5 and Llama3 series to the community."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3dd84f8cc6870cde" quote_sha256="52197024f3440ac2ff6eb305a618040203eaa2283e42e1f97a93a19bd30a8fbd" --> `edge:required:model-deepseek-r1-distill-qwen-7b:hosted_by:infrastructure-hugging-face-hub` / `generated:model-deepseek-r1-distill-qwen-7b:hosted_by`
  - Edge: `model:deepseek-r1-distill-qwen-7b --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B/raw/main/README.md
  - Quote: "\|DeepSeek-R1-Distill-Qwen-32B \| Qwen2.5-32B \| 🤗 HuggingFace \|"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c87277a2e50a3751" quote_sha256="446202cbf5ee88717af64ecc402f62042ca5e9e4d6da5a353c3760b1fc8f0e8e" --> `edge:required:model-deepseek-r1-distill-qwen-7b:licensed_as:license-mit` / `generated:model-deepseek-r1-distill-qwen-7b:licensed_as`
  - Edge: `model:deepseek-r1-distill-qwen-7b --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B/raw/main/README.md
  - Quote: "- DeepSeek-R1-Distill-Qwen-1.5B, DeepSeek-R1-Distill-Qwen-7B, DeepSeek-R1-Distill-Qwen-14B and DeepSeek-R1-Distill-Qwen-32B are derived from Qwen-2.5 series, which are originally licensed under Apache 2.0 License, and now finetuned with 800k samples curated with DeepSeek-R1."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3dc78d539964d929" quote_sha256="296e427684aa195ac6024c800ef2c27e12bfa15bce46f56176478caf4fac54e2" --> `edge:required:model-deepseek-r1-distill-qwen-7b:trained_with:software-source-needed-training-framework` / `generated:model-deepseek-r1-distill-qwen-7b:trained_with`
  - Edge: `model:deepseek-r1-distill-qwen-7b --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B/raw/main/README.md
  - Quote: "DeepSeek-R1 series support commercial use, allow for any modifications and derivative works, including, but not limited to, distillation for training other LLMs. Please note that:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d5f8a0d5b519ecb9" quote_sha256="49fbbc32420f12b805c438b632255df0029c769ed1d74b75f7c6ac886bb2a8dd" --> `edge:required:model-distil-large-v3:developed_by:organization-distil-whisper` / `generated:model-distil-large-v3:developed_by`
  - Edge: `model:distil-large-v3 --developed_by--> organization:distil-whisper`
  - Source URL: https://huggingface.co/distil-whisper/distil-large-v3/raw/main/README.md
  - Quote: "You can expect significant performance gains by switching from previous Distil-Whisper checkpoints to distil-large-v3"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="01f49ea24f91d3b0" quote_sha256="64bd5c5363d1639ddb60412793b659d020d4ddaca203334e4f739dfdef399824" --> `edge:required:model-distil-large-v3:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-distil-large-v3:evaluated_on`
  - Edge: `model:distil-large-v3 --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/distil-whisper/distil-large-v3/raw/main/README.md
  - Quote: "For a detailed per-dataset breakdown of the evaluation results, refer to Tables 16 and 17 of the Distil-Whisper paper"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c99ea4ad71419b51" quote_sha256="6efbe10183f231474e83b333ee22ad4b52044a7b43a1132d2c7a3f6e5764c3fa" --> `edge:required:model-distil-large-v3:hosted_by:infrastructure-hugging-face-hub` / `generated:model-distil-large-v3:hosted_by`
  - Edge: `model:distil-large-v3 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/distil-whisper/distil-large-v3/raw/main/README.md
  - Quote: "Training and evaluation code to reproduce Distil-Whisper is available under the Distil-Whisper repository: https://github.com/huggingface/distil-whisper/tree/main/training"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="cdc8f3e77b95006b" quote_sha256="68d7af8b72e70bfda87567798a54b0743b9a51d483cece48f3ea6d76d4d9fa2d" --> `edge:required:model-distil-large-v3:licensed_as:license-mit` / `generated:model-distil-large-v3:licensed_as`
  - Edge: `model:distil-large-v3 --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/distil-whisper/distil-large-v3/raw/main/README.md
  - Quote: "Distil-Whisper inherits the MIT license from OpenAI's Whisper model."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="732dd3ef27907671" quote_sha256="88c6443916d1a6a82d870e0f57dc9f9e712638845e831ff7f9205b2c42c322f4" --> `edge:required:model-distil-large-v3:trained_on:dataset-source-needed-training-data` / `generated:model-distil-large-v3:trained_on`
  - Edge: `model:distil-large-v3 --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/distil-whisper/distil-large-v3/raw/main/README.md
  - Quote: "1. **Packing the audio samples in the training dataset to 30-seconds:** since the model is both pre-trained and distilled on audio data packed to 30-seconds, distil-large-v3 now operates on the same ideal context window as Whisper, predicting accurate timestamps up to and including 30-seconds."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="17344bd51451d7e6" quote_sha256="ec9934d58b3a8fb44934004f9089eb19da38e0fc566a10c6562c1cadd7c9aedb" --> `edge:required:model-distil-large-v3:trained_with:software-source-needed-training-framework` / `generated:model-distil-large-v3:trained_with`
  - Edge: `model:distil-large-v3 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/distil-whisper/distil-large-v3/raw/main/README.md
  - Quote: "The model was trained for 80,000 optimisation steps (or 11 epochs) with batch size 256. The Tensorboard training logs can be found under: https://huggingface.co/distil-whisper/distil-large-v3/tensorboard?params=scalars#frame"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5da856dcdfa5b634" quote_sha256="64110f3ed71e53772ed330d5b7e408774927da2ef259183eff2ebaed6c3f54e0" --> `edge:required:model-dreamshaper-8:developed_by:organization-lykon` / `generated:model-dreamshaper-8:developed_by`
  - Edge: `model:dreamshaper-8 --developed_by--> organization:lykon`
  - Source URL: https://huggingface.co/Lykon/dreamshaper-8/raw/main/README.md
  - Quote: "duplicated_from: lykon/dreamshaper-8"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0b3500968901022b" quote_sha256="dcd293de0982c961f8a0f2026fcedd6abe50f8b6866bd966423785baddb596ea" --> `edge:required:model-dreamshaper-8:hosted_by:infrastructure-hugging-face-hub` / `generated:model-dreamshaper-8:hosted_by`
  - Edge: `model:dreamshaper-8 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Lykon/dreamshaper-8
  - Quote: "Lykon/dreamshaper-8 · Hugging Face"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2e1ad70f9b789472" quote_sha256="1c24c5502ef16a4f99dd7560a4156dad775d3d890e5b2018e42cd7ab7745a91c" --> `edge:required:model-dreamshaper-8:licensed_as:license-other-composite` / `generated:model-dreamshaper-8:licensed_as`
  - Edge: `model:dreamshaper-8 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/Lykon/dreamshaper-8/raw/main/README.md
  - Quote: "license: creativeml-openrail-m"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f6e18f93c3be0a59" quote_sha256="ba0af924a8a9a1bc27be3e30efced6bdd53972ee492cb9aec1c6f3c949bbae33" --> `edge:required:model-dreamshaper-8:trained_with:software-source-needed-training-framework` / `generated:model-dreamshaper-8:trained_with`
  - Edge: `model:dreamshaper-8 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/Lykon/dreamshaper-8/raw/main/README.md
  - Quote: "pip install diffusers transformers accelerate"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="82ed3bae5c815298" quote_sha256="6f7ac83c381359dc52e3f47c930806e8921e3a25cb39a0a3b2f485cf5509b009" --> `edge:required:model-e5-large-v2:developed_by:organization-intfloat` / `generated:model-e5-large-v2:developed_by`
  - Edge: `model:e5-large-v2 --developed_by--> organization:intfloat`
  - Source URL: https://huggingface.co/intfloat/e5-large-v2/raw/main/README.md
  - Quote: "model = SentenceTransformer('intfloat/e5-large-v2')"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d4587ea0012e976b" quote_sha256="487244156385904308edf7f549eed68e42ab03a37433905a3dd26b0f60b3983b" --> `edge:required:model-e5-large-v2:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-e5-large-v2:evaluated_on`
  - Edge: `model:e5-large-v2 --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/intfloat/e5-large-v2/raw/main/README.md
  - Quote: "Check out unilm/e5 to reproduce evaluation results on the BEIR and MTEB benchmark."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="7201904bfb1ac2af" quote_sha256="5e91f8e8334e8502554485ed868a2845a395ccaca1eb76f3eea8900c6a40c9d7" --> `edge:required:model-e5-large-v2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-e5-large-v2:hosted_by`
  - Edge: `model:e5-large-v2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/intfloat/e5-large-v2/raw/main/README.md
  - Quote: "**2. Why are my reproduced results slightly different from reported in the model card?**"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="01984980d7b3a7d4" quote_sha256="204d0bce1ef327f348bccd1f6efe3397d28f54009edcb813a141198a262bd528" --> `edge:required:model-e5-large-v2:licensed_as:license-mit` / `generated:model-e5-large-v2:licensed_as`
  - Edge: `model:e5-large-v2 --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/intfloat/e5-large-v2/raw/main/README.md
  - Quote: "license: mit"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bd839203dd8fdbbc" quote_sha256="87419f5823777e1e400a4160dd8301faf5c995ad13195f95ef0f4356b90047c4" --> `edge:required:model-e5-large-v2:trained_with:software-source-needed-training-framework` / `generated:model-e5-large-v2:trained_with`
  - Edge: `model:e5-large-v2 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/intfloat/e5-large-v2/raw/main/README.md
  - Quote: "## Training Details"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c66f9df610e0cfa2" quote_sha256="7c427c7f60989c35556c787a307ffb0fd75d15e6f4e8570b032f9907e062b591" --> `edge:required:model-falcon-7b-instruct:developed_by:organization-tiiuae` / `generated:model-falcon-7b-instruct:developed_by`
  - Edge: `model:falcon-7b-instruct --developed_by--> organization:tiiuae`
  - Source URL: https://huggingface.co/tiiuae/falcon-7b-instruct/raw/main/README.md
  - Quote: "- **Developed by:** https://www.tii.ae; - **Model type:** Causal decoder-only; - **Language(s) (NLP):** English and French; - **License:** Apache 2.0; - **Finetuned from model:** Falcon-7B."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="13625af4fe773796" quote_sha256="2e5b3c1f6b935866f96aa6d1ba669c1060a620b843266ef2d50017b27391b488" --> `edge:required:model-falcon-7b-instruct:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-falcon-7b-instruct:evaluated_on`
  - Edge: `model:falcon-7b-instruct --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/tiiuae/falcon-7b-instruct/raw/main/README.md
  - Quote: "## Evaluation"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5b9d87fd1041f0ab" quote_sha256="eaa8d11419da07ee23211afff164c826995c6b0b79c77b18089d1b871e1244a3" --> `edge:required:model-falcon-7b-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-falcon-7b-instruct:hosted_by`
  - Edge: `model:falcon-7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/tiiuae/falcon-7b-instruct/raw/main/README.md
  - Quote: "# Model Card for Falcon-7B-Instruct"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a48e97cd8a7fada5" quote_sha256="c11ab48c2c690f7bc45e3c92909849655b9c17a68f3bc6749f1aa1823e0f6f3c" --> `edge:required:model-falcon-7b-instruct:licensed_as:license-apache-2.0` / `generated:model-falcon-7b-instruct:licensed_as`
  - Edge: `model:falcon-7b-instruct --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/tiiuae/falcon-7b-instruct/raw/main/README.md
  - Quote: "Falcon-7B-Instruct is made available under the Apache 2.0 license."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ca635947c9c8324b" quote_sha256="cd8e5786086be46e331634bc1466ba6b7f95eda1eeaa62342ef4a32a1e63bf13" --> `edge:required:model-falcon-7b-instruct:trained_on:dataset-source-needed-training-data` / `generated:model-falcon-7b-instruct:trained_on`
  - Edge: `model:falcon-7b-instruct --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/tiiuae/falcon-7b-instruct/raw/main/README.md
  - Quote: "To learn more about the pretraining dataset, see the 📓 RefinedWeb paper."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0c83e56773c9d189" quote_sha256="b97981738f224566c84649dff6859820574ecaae3bd34fcf92c5e7d68e947315" --> `edge:required:model-falcon-7b-instruct:trained_with:software-source-needed-training-framework` / `generated:model-falcon-7b-instruct:trained_with`
  - Edge: `model:falcon-7b-instruct --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/tiiuae/falcon-7b-instruct/raw/main/README.md
  - Quote: "Falcon-7B-Instruct was trained a custom distributed training codebase, Gigatron. It uses a 3D parallelism approach combined with ZeRO and high-performance Triton kernels (FlashAttention, etc.)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="9d183f1a3056fbbd" quote_sha256="63dc999ac9ca7814e5577ed8b3efe44aebfcc2194badfdcd12a4f8ae0d6811db" --> `edge:required:model-granite-8b-code-instruct:developed_by:organization-ibm-granite` / `generated:model-granite-8b-code-instruct:developed_by`
  - Edge: `model:granite-8b-code-instruct --developed_by--> organization:ibm-granite`
  - Source URL: https://huggingface.co/ibm-granite/granite-8b-code-instruct/raw/main/README.md
  - Quote: "model_path = "ibm-granite/granite-8b-code-instruct-4k""
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c93800b3dab39efc" quote_sha256="52836029df546de6dbd8f27317830d0794232e612ff58d129a073ec2489d54fc" --> `edge:required:model-granite-8b-code-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-granite-8b-code-instruct:hosted_by`
  - Edge: `model:granite-8b-code-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/ibm-granite/granite-8b-code-instruct/raw/main/README.md
  - Quote: "- **GitHub Repository:** ibm-granite/granite-code-models"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="007dd13adcd6af1b" quote_sha256="2976810ede43a47b64e1173c167683b89fa95ac3bd36d66879948d0359e6117d" --> `edge:required:model-granite-8b-code-instruct:licensed_as:license-apache-2.0` / `generated:model-granite-8b-code-instruct:licensed_as`
  - Edge: `model:granite-8b-code-instruct --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/ibm-granite/granite-8b-code-instruct/raw/main/README.md
  - Quote: "- **Developers:** IBM Research - **GitHub Repository:** ibm-granite/granite-code-models - **Paper:** Granite Code Models: A Family of Open Foundation Models for Code Intelligence - **Release Date**: May 6th, 2024 - **License:** Apache 2.0."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="7dc540807663279b" quote_sha256="841439563c43c4edd1f837f4a8d8e0ebc616671aacf1e9539ccf098369108a09" --> `edge:required:model-granite-8b-code-instruct:trained_on:dataset-source-needed-training-data` / `generated:model-granite-8b-code-instruct:trained_on`
  - Edge: `model:granite-8b-code-instruct --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/ibm-granite/granite-8b-code-instruct/raw/main/README.md
  - Quote: "* Code Commits Datasets: we sourced code commits data from the CommitPackFT dataset, a filtered version of the full CommitPack dataset. From CommitPackFT dataset, we only consider data for 92 programming languages. Our inclusion criteria boils down to selecting programming languages common across CommitPackFT and the 116 languages that we considered to pretrain the code-base model (*Granite-8B-Code-Base*)."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e64c9421ae3edaf6" quote_sha256="3dc8337c9bc86f84e08e22a0dd9839557f1393eb891479a7dc1c335074d610f4" --> `edge:required:model-granite-8b-code-instruct:trained_with:software-source-needed-training-framework` / `generated:model-granite-8b-code-instruct:trained_with`
  - Edge: `model:granite-8b-code-instruct --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/ibm-granite/granite-8b-code-instruct/raw/main/README.md
  - Quote: "We train the Granite Code models using two of IBM's super computing clusters, namely Vela and Blue Vela, both outfitted with NVIDIA A100 and H100 GPUs respectively. These clusters provide a scalable and efficient infrastructure for training our models over thousands of GPUs."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="56fa4af375a7a6d5" quote_sha256="87cd8024f08354cc64814c99026686779caa63846439049408c541156c826d18" --> `edge:required:model-gte-large-en-v1.5:developed_by:organization-alibaba-nlp` / `generated:model-gte-large-en-v1.5:developed_by`
  - Edge: `model:gte-large-en-v1.5 --developed_by--> organization:alibaba-nlp`
  - Source URL: https://huggingface.co/Alibaba-NLP/gte-large-en-v1.5/raw/main/README.md
  - Quote: "- **Developed by:** Institute for Intelligent Computing, Alibaba Group - **Model type:** Text Embeddings - **Paper:** mGTE: Generalized Long-Context Text Representation and Reranking Models for Multilingual Text Retrieval"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="9152f5ac11d37ac3" quote_sha256="f7781878a055b2df57b36373132c49bf5c2252d0bb547faa28dd42ff5346215d" --> `edge:required:model-gte-large-en-v1.5:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-gte-large-en-v1.5:evaluated_on`
  - Edge: `model:gte-large-en-v1.5 --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/Alibaba-NLP/gte-large-en-v1.5/raw/main/README.md
  - Quote: "The `gte-v1.5` series achieve state-of-the-art scores on the MTEB benchmark within the same model size category and prodvide competitive on the LoCo long-context retrieval tests (refer to Evaluation)."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0cbf094bd4673de0" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-gte-large-en-v1.5:licensed_as:license-apache-2.0` / `generated:model-gte-large-en-v1.5:licensed_as`
  - Edge: `model:gte-large-en-v1.5 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/Alibaba-NLP/gte-large-en-v1.5/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="9534a3c02a217c47" quote_sha256="888ca1960628f229f13caac9e6a543ffbae120c5874ff2149345f304b7856170" --> `edge:required:model-gte-large-en-v1.5:trained_on:dataset-source-needed-training-data` / `generated:model-gte-large-en-v1.5:trained_on`
  - Edge: `model:gte-large-en-v1.5 --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/Alibaba-NLP/gte-large-en-v1.5/raw/main/README.md
  - Quote: "- Weak-supervised contrastive pre-training (CPT): GTE pre-training data"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6280078c0609b880" quote_sha256="888ca1960628f229f13caac9e6a543ffbae120c5874ff2149345f304b7856170" --> `edge:required:model-gte-large-en-v1.5:trained_with:software-source-needed-training-framework` / `generated:model-gte-large-en-v1.5:trained_with`
  - Edge: `model:gte-large-en-v1.5 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/Alibaba-NLP/gte-large-en-v1.5/raw/main/README.md
  - Quote: "- Weak-supervised contrastive pre-training (CPT): GTE pre-training data"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="787ded5a0fd65b4d" quote_sha256="7f4c1b210d08f1100ca16eb8bca980a9070cd4146ee05e126fbbc80a2316643e" --> `edge:required:model-hunyuan-dit-v1.2:developed_by:organization-tencent-hunyuan` / `generated:model-hunyuan-dit-v1.2:developed_by`
  - Edge: `model:hunyuan-dit-v1.2 --developed_by--> organization:tencent-hunyuan`
  - Source URL: https://huggingface.co/Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers/raw/main/README.md
  - Quote: "license_link: https://huggingface.co/Tencent-Hunyuan/HunyuanDiT/blob/main/LICENSE.txt"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="1bcac067feb06edd" quote_sha256="bd93ecc39ae0f1b04b8a0a353e712d3982597617b2539feaa01e5f7b1d6cab2e" --> `edge:required:model-hunyuan-dit-v1.2:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-hunyuan-dit-v1.2:evaluated_on`
  - Edge: `model:hunyuan-dit-v1.2 --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers/raw/main/README.md
  - Quote: "In order to comprehensively compare the generation capabilities of HunyuanDiT and other models, we constructed a 4-dimensional test set, including Text-Image Consistency, Excluding AI Artifacts, Subject Clarity, Aesthetic. More than 50 professional evaluators performs the evaluation."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e14ec77b22fb2cb9" quote_sha256="b520b7bccc5c4a4854c1025deb52088adcabd4907d6fdc0f9a0433ae671fd08f" --> `edge:required:model-hunyuan-dit-v1.2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-hunyuan-dit-v1.2:hosted_by`
  - Edge: `model:hunyuan-dit-v1.2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers/raw/main/README.md
  - Quote: "pip install git+https://github.com/huggingface/diffusers.git"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0d2081eb14a8d555" quote_sha256="7f4c1b210d08f1100ca16eb8bca980a9070cd4146ee05e126fbbc80a2316643e" --> `edge:required:model-hunyuan-dit-v1.2:licensed_as:license-other-composite` / `generated:model-hunyuan-dit-v1.2:licensed_as`
  - Edge: `model:hunyuan-dit-v1.2 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers/raw/main/README.md
  - Quote: "license_link: https://huggingface.co/Tencent-Hunyuan/HunyuanDiT/blob/main/LICENSE.txt"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="05accbfe7546d9af" quote_sha256="f89348a636603583c15faf0bdbb9425cf2f5078b014e36b2c02ccc736b3eab47" --> `edge:required:model-hunyuan-dit-v1.2:trained_with:software-source-needed-training-framework` / `generated:model-hunyuan-dit-v1.2:trained_with`
  - Edge: `model:hunyuan-dit-v1.2 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers/raw/main/README.md
  - Quote: "from diffusers import HunyuanDiTPipeline"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2f432661d3b20c0b" quote_sha256="cf12cbc98eb23ecb7d1078dfe1468aee3993b8c85960958c1ffa03e2d53bd64b" --> `edge:required:model-jina-embeddings-v3:developed_by:organization-jinaai` / `generated:model-jina-embeddings-v3:developed_by`
  - Edge: `model:jina-embeddings-v3 --developed_by--> organization:jinaai`
  - Source URL: https://huggingface.co/jinaai/jina-embeddings-v3/raw/main/README.md
  - Quote: "> If you have encoded data using the previous version and wish to maintain consistency, please use the specific code revision when loading the model: `AutoModel.from_pretrained('jinaai/jina-embeddings-v3', code_revision='da863dd04a4e5dce6814c6625adfba87b83838aa', ...)`"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="b2e3d8fc88a7c8e8" quote_sha256="5227c4df03694e57b6d36cec811952117a66c40c944088ff14c0f60c815522c2" --> `edge:required:model-jina-embeddings-v3:licensed_as:license-other-composite` / `generated:model-jina-embeddings-v3:licensed_as`
  - Edge: `model:jina-embeddings-v3 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/jinaai/jina-embeddings-v3/raw/main/README.md
  - Quote: "`jina-embeddings-v3` is listed on AWS & Azure. If you need to use it beyond those platforms or on-premises within your company, note that the models is licensed under CC BY-NC 4.0. For commercial usage inquiries, feel free to contact us."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="65973c019ecdbf37" quote_sha256="f91027627122caade67f70274ea4f79c3608c9c13b4e0794f5ca765903683207" --> `edge:required:model-jina-embeddings-v3:trained_with:software-source-needed-training-framework` / `generated:model-jina-embeddings-v3:trained_with`
  - Edge: `model:jina-embeddings-v3 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/jinaai/jina-embeddings-v3/raw/main/README.md
  - Quote: "Alternatively, you can use `jina-embeddings-v3` directly via Transformers package:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="978d6e6ba5a8052f" quote_sha256="f6fa910f2799475d5ec280969078abf1e43e00fe52498ce13518f4a838a3ee2e" --> `edge:required:model-kandinsky-2-2-decoder:developed_by:organization-kandinsky-community` / `generated:model-kandinsky-2-2-decoder:developed_by`
  - Edge: `model:kandinsky-2-2-decoder --developed_by--> organization:kandinsky-community`
  - Source URL: https://huggingface.co/kandinsky-community/kandinsky-2-2-decoder/raw/main/README.md
  - Quote: "The Kandinsky model is created by Arseniy Shakhmatov, Anton Razzhigaev, Aleksandr Nikolich, Igor Pavlov, Andrey Kuznetsov and Denis Dimitrov"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0c61ef9d712c4561" quote_sha256="509455da3a9d6c39c0e224d5ac050a16236123a1c3ebfd30bd5222fb528c10ce" --> `edge:required:model-kandinsky-2-2-decoder:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-kandinsky-2-2-decoder:evaluated_on`
  - Edge: `model:kandinsky-2-2-decoder --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/kandinsky-community/kandinsky-2-2-decoder/raw/main/README.md
  - Quote: "### Evaluation We quantitatively measure the performance of Kandinsky 2.1 on the COCO_30k dataset, in zero-shot mode. The table below presents FID."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ad9cea9fce01b6d4" quote_sha256="6a26619d9a9d62b567ce3ed68f63129f9279aa085c32b2a79b74495d4296baad" --> `edge:required:model-kandinsky-2-2-decoder:hosted_by:infrastructure-hugging-face-hub` / `generated:model-kandinsky-2-2-decoder:hosted_by`
  - Edge: `model:kandinsky-2-2-decoder --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/kandinsky-community/kandinsky-2-2-decoder/raw/main/README.md
  - Quote: ""https://huggingface.co/datasets/hf-internal-testing/diffusers-images/resolve/main" "/kandinsky/cat.png""
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8532f9a639b2fce8" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-kandinsky-2-2-decoder:licensed_as:license-apache-2.0` / `generated:model-kandinsky-2-2-decoder:licensed_as`
  - Edge: `model:kandinsky-2-2-decoder --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/kandinsky-community/kandinsky-2-2-decoder/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8d7c43a7c6c30bdf" quote_sha256="0e2ce060ac1cdc2f0e14a5df414a0dcf2f8d154a00280de6d372ec89801879e2" --> `edge:required:model-kandinsky-2-2-decoder:trained_on:dataset-source-needed-training-data` / `generated:model-kandinsky-2-2-decoder:trained_on`
  - Edge: `model:kandinsky-2-2-decoder --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/kandinsky-community/kandinsky-2-2-decoder/raw/main/README.md
  - Quote: "The image prior training of the model was performed on the LAION Improved Aesthetics dataset, and then fine-tuning was performed on the LAION HighRes data."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="38f47b98cd9e2817" quote_sha256="be80684d960ba729f542fe90d8e68117d2e9b4a8308a8b275f71a7ff2638df09" --> `edge:required:model-kandinsky-2-2-decoder:trained_with:software-source-needed-training-framework` / `generated:model-kandinsky-2-2-decoder:trained_with`
  - Edge: `model:kandinsky-2-2-decoder --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/kandinsky-community/kandinsky-2-2-decoder/raw/main/README.md
  - Quote: "from diffusers import KandinskyV22PriorPipeline, KandinskyV22Pipeline"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a33fcdb10979869d" quote_sha256="5fda6801f404af426b7ee7975f310da7d0be6e6b7f143534201c4eb5b7ec2e67" --> `edge:required:model-llama-3.1-8b-instruct:developed_by:organization-meta-llama` / `generated:model-llama-3.1-8b-instruct:developed_by`
  - Edge: `model:llama-3.1-8b-instruct --developed_by--> organization:meta-llama`
  - Source URL: https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct
  - Quote: "Llama 3.1"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f39301a3d1fdfc9f" quote_sha256="8f52471cb8920f8d1cbb347ddf2b2a8ccf048a56d46670ed96ddad2902198edd" --> `edge:required:model-magicoder-s-ds-6.7b:developed_by:organization-ise-uiuc` / `generated:model-magicoder-s-ds-6.7b:developed_by`
  - Edge: `model:magicoder-s-ds-6.7b --developed_by--> organization:ise-uiuc`
  - Source URL: https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B/raw/main/README.md
  - Quote: "- ise-uiuc/Magicoder-OSS-Instruct-75K"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5c5ea7d7705d8012" quote_sha256="1b87303d432a84d1b1b8a22c30a57715b894611ca34f68da4c90a4262c35d0d9" --> `edge:required:model-magicoder-s-ds-6.7b:hosted_by:infrastructure-hugging-face-hub` / `generated:model-magicoder-s-ds-6.7b:hosted_by`
  - Edge: `model:magicoder-s-ds-6.7b --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B/raw/main/README.md
  - Quote: "Refer to our GitHub repo: ise-uiuc/magicoder."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="63bd352a0e2a1c53" quote_sha256="3475ecbe98fa231b194ca26d297e834527e396ef4f9723f862993f78dc2b28fb" --> `edge:required:model-magicoder-s-ds-6.7b:licensed_as:license-other-composite` / `generated:model-magicoder-s-ds-6.7b:licensed_as`
  - Edge: `model:magicoder-s-ds-6.7b --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B/raw/main/README.md
  - Quote: "license: other"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="35883deedccb7821" quote_sha256="6f7794def9bd58b0e47ba0e075247e378a4815d994471f1cc0c6dec62ccd950c" --> `edge:required:model-magicoder-s-ds-6.7b:trained_on:dataset-source-needed-training-data` / `generated:model-magicoder-s-ds-6.7b:trained_on`
  - Edge: `model:magicoder-s-ds-6.7b --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B/raw/main/README.md
  - Quote: "Magicoder models are trained on the synthetic data generated by OpenAI models. Please pay attention to OpenAI's terms of use when using the models and the datasets. Magicoders will not compete with OpenAI's commercial products."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3eb2d6b8f04fe225" quote_sha256="76a77147b5fceaf91982a584e7c88cda182c8da8a87e27bb611b27afad68bef4" --> `edge:required:model-magicoder-s-ds-6.7b:trained_with:software-source-needed-training-framework` / `generated:model-magicoder-s-ds-6.7b:trained_with`
  - Edge: `model:magicoder-s-ds-6.7b --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B/raw/main/README.md
  - Quote: "### Training Data"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e72ffe15facfc8f7" quote_sha256="427144412cb917ca58325f626c58a61f0da1aab14fb0f05c5d452f583239467a" --> `edge:required:model-mixtral-8x7b-instruct-v0.1:developed_by:organization-mistralai` / `generated:model-mixtral-8x7b-instruct-v0.1:developed_by`
  - Edge: `model:mixtral-8x7b-instruct-v0.1 --developed_by--> organization:mistralai`
  - Source URL: https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1/raw/main/README.md
  - Quote: "model_id = "mistralai/Mixtral-8x7B-Instruct-v0.1""
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="4da1ad7650b6da51" quote_sha256="8f71efe1a5550074e948c39b04dcea780c26662a651a03e545e5ac9f20b202df" --> `edge:required:model-mixtral-8x7b-instruct-v0.1:hosted_by:infrastructure-hugging-face-hub` / `generated:model-mixtral-8x7b-instruct-v0.1:hosted_by`
  - Edge: `model:mixtral-8x7b-instruct-v0.1 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1/raw/main/README.md
  - Quote: "This repo contains weights that are compatible with vLLM serving of the model as well as Hugging Face transformers library. It is based on the original Mixtral torrent release, but the file format and parameter names are different. Please note that model cannot (yet) be instantiated with HF."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d66d435c6de5d423" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-mixtral-8x7b-instruct-v0.1:licensed_as:license-apache-2.0` / `generated:model-mixtral-8x7b-instruct-v0.1:licensed_as`
  - Edge: `model:mixtral-8x7b-instruct-v0.1 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ba1ac15321b92c69" quote_sha256="c2777c123368baf7863c8db3974d77f2641ac3fe627ad0014174efb04b5ef1e2" --> `edge:required:model-mixtral-8x7b-instruct-v0.1:trained_on:dataset-source-needed-training-data` / `generated:model-mixtral-8x7b-instruct-v0.1:trained_on`
  - Edge: `model:mixtral-8x7b-instruct-v0.1 --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1
  - Quote: "ixtral-8x7B-Instruct-v0.1","isLikedByUser":false,"availableInferenceProviders":[],"showHuggingChatEntry":false,"inference":"","lastModified":"2025-07-24T16:41:06.000Z","likes":4694,"library_name":"vllm","librariesOther":[],"trackDownloads":true,"model-index":null,"evalResults":[{"dataset":{"id":"TIGER-Lab/MMLU-Pro","isBenchmark":true,"task_id":"mmlu_pro"},"value":43.27,"source":{"url":"https://huggingface."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fd8ec79767b45025" quote_sha256="72d76306e038c6f4defd8e92fbaca2f826116701e043ef387e9ecaf70a555d1d" --> `edge:required:model-mixtral-8x7b-instruct-v0.1:trained_with:software-source-needed-training-framework` / `generated:model-mixtral-8x7b-instruct-v0.1:trained_with`
  - Edge: `model:mixtral-8x7b-instruct-v0.1 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1/raw/main/README.md
  - Quote: "> [!TIP] > PRs to correct the transformers tokenizer so that it gives 1-to-1 the same results as the mistral-common reference implementation are very welcome! --- The Mixtral-8x7B Large Language Model (LLM) is a pretrained generative Sparse Mixture of Experts. The Mixtral-8x7B outperforms Llama 2 70B on most benchmarks we tested."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3a6430e08b0976f4" quote_sha256="90111869789128c11c2e936e56ba17d059817dbf76b58cd46683c1e2df590e77" --> `edge:required:model-multilingual-e5-large:developed_by:organization-intfloat` / `generated:model-multilingual-e5-large:developed_by`
  - Edge: `model:multilingual-e5-large --developed_by--> organization:intfloat`
  - Source URL: https://huggingface.co/intfloat/multilingual-e5-large/raw/main/README.md
  - Quote: "model = SentenceTransformer('intfloat/multilingual-e5-large')"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0b65b93f63a3c932" quote_sha256="487244156385904308edf7f549eed68e42ab03a37433905a3dd26b0f60b3983b" --> `edge:required:model-multilingual-e5-large:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-multilingual-e5-large:evaluated_on`
  - Edge: `model:multilingual-e5-large --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/intfloat/multilingual-e5-large/raw/main/README.md
  - Quote: "Check out unilm/e5 to reproduce evaluation results on the BEIR and MTEB benchmark."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f9866366f47944eb" quote_sha256="5e91f8e8334e8502554485ed868a2845a395ccaca1eb76f3eea8900c6a40c9d7" --> `edge:required:model-multilingual-e5-large:hosted_by:infrastructure-hugging-face-hub` / `generated:model-multilingual-e5-large:hosted_by`
  - Edge: `model:multilingual-e5-large --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/intfloat/multilingual-e5-large/raw/main/README.md
  - Quote: "**2. Why are my reproduced results slightly different from reported in the model card?**"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="da8ed0c7fccb920d" quote_sha256="204d0bce1ef327f348bccd1f6efe3397d28f54009edcb813a141198a262bd528" --> `edge:required:model-multilingual-e5-large:licensed_as:license-mit` / `generated:model-multilingual-e5-large:licensed_as`
  - Edge: `model:multilingual-e5-large --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/intfloat/multilingual-e5-large/raw/main/README.md
  - Quote: "license: mit"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="64ddda91cbb15497" quote_sha256="ae8c441002d308dd1f3560f087b2ce8d6b2fd9f2cf3c6cbbf1f91b36fd5fea25" --> `edge:required:model-multilingual-e5-large:trained_on:dataset-source-needed-training-data` / `generated:model-multilingual-e5-large:trained_on`
  - Edge: `model:multilingual-e5-large --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/intfloat/multilingual-e5-large/raw/main/README.md
  - Quote: "This model is initialized from xlm-roberta-large and continually trained on a mixture of multilingual datasets. It supports 100 languages from xlm-roberta, but low-resource languages may see performance degradation."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="292b7845a0f9a16d" quote_sha256="87419f5823777e1e400a4160dd8301faf5c995ad13195f95ef0f4356b90047c4" --> `edge:required:model-multilingual-e5-large:trained_with:software-source-needed-training-framework` / `generated:model-multilingual-e5-large:trained_with`
  - Edge: `model:multilingual-e5-large --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/intfloat/multilingual-e5-large/raw/main/README.md
  - Quote: "## Training Details"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="943cee3902265eb6" quote_sha256="12346ecc5cf8ce9618d9b7b1470e02ea48fc7535be8fd7896440a3dac31907b9" --> `edge:required:model-musicgen-small:developed_by:organization-facebook` / `generated:model-musicgen-small:developed_by`
  - Edge: `model:musicgen-small --developed_by--> organization:facebook`
  - Source URL: https://huggingface.co/facebook/musicgen-small/raw/main/README.md
  - Quote: "MusicGen is a text-to-music model capable of genreating high-quality music samples conditioned on text descriptions or audio prompts. It is a single stage auto-regressive Transformer model trained over a 32kHz EnCodec tokenizer with 4 codebooks sampled at 50 Hz. Unlike existing methods, like MusicLM, MusicGen doesn't require a self-supervised semantic representation, and it generates all 4 codebooks in one pass. By introducing a small delay between the codebooks, we show we can predict them in parallel, thus having only 50 auto-regressive steps per second of audio."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="7549b617eeeef458" quote_sha256="fa4791082b96434a8f9cf813b6e283439e447f1be3da02b944090821ad2225ea" --> `edge:required:model-musicgen-small:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-musicgen-small:evaluated_on`
  - Edge: `model:musicgen-small --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/facebook/musicgen-small/raw/main/README.md
  - Quote: "The model was evaluated on the MusicCaps benchmark and on an in-domain held-out evaluation set, with no artist overlap with the training set."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="27eb07aa1c3df976" quote_sha256="afd1f9107c35be0c098f4394fa46c397c6901652fe17390a1b9ae62690921a60" --> `edge:required:model-musicgen-small:hosted_by:infrastructure-hugging-face-hub` / `generated:model-musicgen-small:hosted_by`
  - Edge: `model:musicgen-small --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/facebook/musicgen-small/raw/main/README.md
  - Quote: "**Where to send questions or comments about the model:** Questions and comments about MusicGen can be sent via the Github repository of the project, or by opening an issue."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="76565001e8d4a75e" quote_sha256="5e9a60ec695488a1b779e29392823381a63629908bd022205ca82dc337570b58" --> `edge:required:model-musicgen-small:licensed_as:license-other-composite` / `generated:model-musicgen-small:licensed_as`
  - Edge: `model:musicgen-small --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/facebook/musicgen-small/raw/main/README.md
  - Quote: "**License:** Code is released under MIT, model weights are released under CC-BY-NC 4.0."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2d20cfee17f3a4d3" quote_sha256="c6f3940b2834bd3046ab903512a57756357c06aff1a204989f36f81ea8b06ee4" --> `edge:required:model-musicgen-small:trained_on:dataset-source-needed-training-data` / `generated:model-musicgen-small:trained_on`
  - Edge: `model:musicgen-small --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/facebook/musicgen-small/raw/main/README.md
  - Quote: "The model was trained on licensed data using the following sources: the Meta Music Initiative Sound Collection, Shutterstock music collection and the Pond5 music collection. See the paper for more details about the training set and corresponding preprocessing."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3bd4957df7439615" quote_sha256="092a7b74a1b4acd2d393f2cf335a7c15fc97b1975c4131d9a889592021d76175" --> `edge:required:model-musicgen-small:trained_with:software-source-needed-training-framework` / `generated:model-musicgen-small:trained_with`
  - Edge: `model:musicgen-small --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/facebook/musicgen-small/raw/main/README.md
  - Quote: "synthesiser = pipeline("text-to-audio", "facebook/musicgen-small")"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bceb7e9f3ece09bd" quote_sha256="0fedc4b1b4a51c826d42d0a38b6727c1364f636abe15cc2ceb3d64e1a2587308" --> `edge:required:model-mxbai-embed-large-v1:developed_by:organization-mixedbread-ai` / `generated:model-mxbai-embed-large-v1:developed_by`
  - Edge: `model:mxbai-embed-large-v1 --developed_by--> organization:mixedbread-ai`
  - Source URL: https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1/raw/main/README.md
  - Quote: "# mixedbread-ai/mxbai-embed-large-v1"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3ce27d5710062299" quote_sha256="2e5b3c1f6b935866f96aa6d1ba669c1060a620b843266ef2d50017b27391b488" --> `edge:required:model-mxbai-embed-large-v1:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-mxbai-embed-large-v1:evaluated_on`
  - Edge: `model:mxbai-embed-large-v1 --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1/raw/main/README.md
  - Quote: "## Evaluation"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c3a887a759f75530" quote_sha256="ebf62f4f5ca3799cbec380d39e68f9e1ef993fa4fb9347f30728c84848f29b1e" --> `edge:required:model-mxbai-embed-large-v1:hosted_by:infrastructure-hugging-face-hub` / `generated:model-mxbai-embed-large-v1:hosted_by`
  - Edge: `model:mxbai-embed-large-v1 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1/raw/main/README.md
  - Quote: "npm i @huggingface/transformers"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f60ca9cc3113c89f" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-mxbai-embed-large-v1:licensed_as:license-apache-2.0` / `generated:model-mxbai-embed-large-v1:licensed_as`
  - Edge: `model:mxbai-embed-large-v1 --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a5ef0abee83e6e77" quote_sha256="1d1075014a54fb30bbaa7b25660ea3ecd1c2ec8150aab9337a69b53dff669b37" --> `edge:required:model-mxbai-embed-large-v1:trained_with:software-source-needed-training-framework` / `generated:model-mxbai-embed-large-v1:trained_with`
  - Edge: `model:mxbai-embed-large-v1 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1/raw/main/README.md
  - Quote: "const extractor = await pipeline("feature-extraction", "mixedbread-ai/mxbai-embed-large-v1", {"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="491e638fa6b25bf3" quote_sha256="2d802ce242c74c3dfd0f45872bf8f82d2e0794d7a9b417c9f1d8c0043bc90838" --> `edge:required:model-olmo-2-1124-7b-instruct:developed_by:organization-allenai` / `generated:model-olmo-2-1124-7b-instruct:developed_by`
  - Edge: `model:olmo-2-1124-7b-instruct --developed_by--> organization:allenai`
  - Source URL: https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct/raw/main/README.md
  - Quote: "- **Model type:** A model trained on a mix of publicly available, synthetic and human-created datasets. - **Language(s) (NLP):** Primarily English - **License:** Apache 2.0 - **Finetuned from model:** allenai/OLMo-2-7B-1124-DPO"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="4a9aa4c3c8bcdebb" quote_sha256="a9fdfa59a196be08c2922637e4ab8fbe77a841b736289784aaf19abf034b4fd6" --> `edge:required:model-olmo-2-1124-7b-instruct:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-olmo-2-1124-7b-instruct:evaluated_on`
  - Edge: `model:olmo-2-1124-7b-instruct --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct/raw/main/README.md
  - Quote: "- **Project Page:** https://allenai.org/olmo - **Repositories:** - Core repo (training, inference, fine-tuning etc.): https://github.com/allenai/OLMo - Evaluation code: https://github.com/allenai/olmes - Further fine-tuning code: https://github.com/allenai/open-instruct - **Paper:** https://arxiv.org/abs/2501.00656 - **Demo:** https://playground.allenai.org/"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2c9e40c24e11c665" quote_sha256="b0086de0031be46a6a95f8be5548c87d06e763e50c0769bfd076569502cc17c2" --> `edge:required:model-olmo-2-1124-7b-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-olmo-2-1124-7b-instruct:hosted_by`
  - Edge: `model:olmo-2-1124-7b-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct/raw/main/README.md
  - Quote: "pip install --upgrade git+https://github.com/huggingface/transformers.git"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f97663afa2f239b7" quote_sha256="6dc6364df624606d05fccee6e6fa258da876c8b3432c22ceeb333ba985b6639c" --> `edge:required:model-olmo-2-1124-7b-instruct:licensed_as:license-apache-2.0` / `generated:model-olmo-2-1124-7b-instruct:licensed_as`
  - Edge: `model:olmo-2-1124-7b-instruct --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct/raw/main/README.md
  - Quote: "OLMo 2 is licensed under the Apache 2.0 license."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="310bbd27c5e277ee" quote_sha256="66469eafb4c71215755e0b25637733519e35e16d1ee223c0156ead8db529fbd5" --> `edge:required:model-olmo-2-1124-7b-instruct:trained_on:dataset-source-needed-training-data` / `generated:model-olmo-2-1124-7b-instruct:trained_on`
  - Edge: `model:olmo-2-1124-7b-instruct --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct/raw/main/README.md
  - Quote: "OLMo 2 7B Instruct November 2024 is post-trained variant of the OLMo-2 7B November 2024 model, which has undergone supervised finetuning on an OLMo-specific variant of the Tülu 3 dataset and further DPO training on this dataset, and finally RLVR training using this data."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5c06aaef0a660b3e" quote_sha256="66469eafb4c71215755e0b25637733519e35e16d1ee223c0156ead8db529fbd5" --> `edge:required:model-olmo-2-1124-7b-instruct:trained_with:software-source-needed-training-framework` / `generated:model-olmo-2-1124-7b-instruct:trained_with`
  - Edge: `model:olmo-2-1124-7b-instruct --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct/raw/main/README.md
  - Quote: "OLMo 2 7B Instruct November 2024 is post-trained variant of the OLMo-2 7B November 2024 model, which has undergone supervised finetuning on an OLMo-specific variant of the Tülu 3 dataset and further DPO training on this dataset, and finally RLVR training using this data."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="86248e6d2f54932e" quote_sha256="3d877a8183bd67e0dce1c117590d90be0e289123b5f88a256fb7f0d896715d1d" --> `edge:required:model-parakeet-tdt-0.6b-v2:developed_by:organization-nvidia` / `generated:model-parakeet-tdt-0.6b-v2:developed_by`
  - Edge: `model:parakeet-tdt-0.6b-v2 --developed_by--> organization:nvidia`
  - Source URL: https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2/raw/main/README.md
  - Quote: "--metadata "authorization" "Bearer $NVIDIA_API_KEY" \"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6bfdb8bc897a0ccf" quote_sha256="bdd2faa23cac8cb153276638e1d5f13b6398663b1f162cc0545777ec3a236eb2" --> `edge:required:model-parakeet-tdt-0.6b-v2:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-parakeet-tdt-0.6b-v2:evaluated_on`
  - Edge: `model:parakeet-tdt-0.6b-v2 --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2/raw/main/README.md
  - Quote: "* Audio data is typically processed into a 16kHz mono channel format for ASR evaluation, consistent with benchmarks like the Open ASR Leaderboard."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="b5895ec390cc23a3" quote_sha256="379bbaf9c76f36751c8bda5c9e0aaa766da90d706b0ae29b746b04eef013debb" --> `edge:required:model-parakeet-tdt-0.6b-v2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-parakeet-tdt-0.6b-v2:hosted_by`
  - Edge: `model:parakeet-tdt-0.6b-v2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2/raw/main/README.md
  - Quote: "These WER scores were obtained using greedy decoding without an external language model. Additional evaluation details are available on the Hugging Face ASR Leaderboard.[6]"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="579b4922138431d2" quote_sha256="277a1c3da3bc045b53a85d4326be8ac51b983fc23662280114871718ffa67ce8" --> `edge:required:model-parakeet-tdt-0.6b-v2:licensed_as:license-cc-by-4.0` / `generated:model-parakeet-tdt-0.6b-v2:licensed_as`
  - Edge: `model:parakeet-tdt-0.6b-v2 --licensed_as--> license:cc-by-4.0`
  - Source URL: https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2/raw/main/README.md
  - Quote: "Model and dataset restrictions \| The Principle of least privilege (PoLP) is applied limiting access for dataset generation and model development. Restrictions enforce dataset access during training, and dataset license constraints adhered to."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c370c72b7c89802b" quote_sha256="97d93b019d4cb95f9f5cbf7b19de87eb94f917d95d8f6058d2cb63d0134c7b13" --> `edge:required:model-parakeet-tdt-0.6b-v2:trained_on:dataset-source-needed-training-data` / `generated:model-parakeet-tdt-0.6b-v2:trained_on`
  - Edge: `model:parakeet-tdt-0.6b-v2 --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2/raw/main/README.md
  - Quote: "### Training Dataset The model was trained on the Granary dataset[8], consisting of approximately 120,000 hours of English speech data:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e0e33174d0c13d23" quote_sha256="12ce51b5e21a2ceb61e93165784c9c0e8f683d2ef83d3fc4386ae80293c7a3ba" --> `edge:required:model-parakeet-tdt-0.6b-v2:trained_with:software-source-needed-training-framework` / `generated:model-parakeet-tdt-0.6b-v2:trained_with`
  - Edge: `model:parakeet-tdt-0.6b-v2 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2/raw/main/README.md
  - Quote: "Our AI models are designed and/or optimized to run on NVIDIA GPU-accelerated systems. By leveraging NVIDIA's hardware (e.g. GPU cores) and software frameworks (e.g., CUDA libraries), the model achieves faster training and inference times compared to CPU-only solutions."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="1f1b19015ce63168" quote_sha256="0cdb47b2a3091d371c7131ddc429a4392b848665bdb5b1389c59863b98bf2dbd" --> `edge:required:model-phi-3-mini-4k-instruct:developed_by:organization-microsoft` / `generated:model-phi-3-mini-4k-instruct:developed_by`
  - Edge: `model:phi-3-mini-4k-instruct --developed_by--> organization:microsoft`
  - Source URL: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct/raw/main/README.md
  - Quote: "Note that by default, the Phi-3 Mini-4K-Instruct model uses flash attention, which requires certain types of GPU hardware to run. We have tested on the following GPU types:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="dcb8155d46429603" quote_sha256="a641d9d0e4e7f9363fd790e9eeddd1d6ebd797851fdf18fea07134c0f0bc5505" --> `edge:required:model-phi-3-mini-4k-instruct:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-phi-3-mini-4k-instruct:evaluated_on`
  - Edge: `model:phi-3-mini-4k-instruct --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct/raw/main/README.md
  - Quote: "All the reported numbers are produced with the exact same pipeline to ensure that the numbers are comparable. These numbers might differ from other published numbers due to slightly different choices in the evaluation."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c1c667beecd90123" quote_sha256="9fd66dafc100ba051e5469e251916579f1a1e703d32940441359b55a8a50ad1e" --> `edge:required:model-phi-3-mini-4k-instruct:hosted_by:infrastructure-hugging-face-hub` / `generated:model-phi-3-mini-4k-instruct:hosted_by`
  - Edge: `model:phi-3-mini-4k-instruct --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct/raw/main/README.md
  - Quote: "https://huggingface.co/microsoft/Phi-3-mini-4k-instruct/blob/main/data_summary_card.md"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="619c4c14d9407efb" quote_sha256="717b40ba1a90b81c73986456a19631328e0001029f4b15dc4471b906dd406eae" --> `edge:required:model-phi-3-mini-4k-instruct:licensed_as:license-mit` / `generated:model-phi-3-mini-4k-instruct:licensed_as`
  - Edge: `model:phi-3-mini-4k-instruct --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct/raw/main/README.md
  - Quote: "The model is licensed under the MIT license."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="aea27ea3150d3d70" quote_sha256="e1d8897490b958458df7129f290110887e96ccb896db81f6aade4e155adad4b5" --> `edge:required:model-phi-3-mini-4k-instruct:trained_on:dataset-source-needed-training-data` / `generated:model-phi-3-mini-4k-instruct:trained_on`
  - Edge: `model:phi-3-mini-4k-instruct --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct/raw/main/README.md
  - Quote: "The model used additional post-training data leading to substantial gains on instruction following and structure output."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fd2c14c695f4b062" quote_sha256="05d0a818eefa913701cb13d2b3a920f092e1b7c3802e63079d7c3bb3c96d5e03" --> `edge:required:model-phi-3-mini-4k-instruct:trained_with:software-source-needed-training-framework` / `generated:model-phi-3-mini-4k-instruct:trained_with`
  - Edge: `model:phi-3-mini-4k-instruct --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct/raw/main/README.md
  - Quote: "Given the nature of the training data, the Phi-3 Mini-4K-Instruct model is best suited for prompts using the chat format as follows."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="3dd246d553871a99" quote_sha256="ec06413b68e0206a3119bc29d8123c32cae1c7c908e2b12ed6e2ac543283c0e5" --> `edge:required:model-pixart-xl-2-1024-ms:developed_by:organization-pixart-alpha` / `generated:model-pixart-xl-2-1024-ms:developed_by`
  - Edge: `model:pixart-xl-2-1024-ms --developed_by--> organization:pixart-alpha`
  - Source URL: https://huggingface.co/PixArt-alpha/PixArt-XL-2-1024-MS/raw/main/README.md
  - Quote: "- **Developed by:** Pixart-α"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a75c9063f91cb0c9" quote_sha256="c69c32bc69af213f9443f4968e17328562a409e33d9f276925c5f3c5702321ef" --> `edge:required:model-pixart-xl-2-1024-ms:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-pixart-xl-2-1024-ms:evaluated_on`
  - Edge: `model:pixart-xl-2-1024-ms --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/PixArt-alpha/PixArt-XL-2-1024-MS/raw/main/README.md
  - Quote: "## Evaluation !comparison The chart above evaluates user preference for Pixart-α over SDXL 0.9, Stable Diffusion 2, DALLE-2 and DeepFloyd. The Pixart-α base model performs comparable or even better than the existing state-of-the-art models."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="344b9d8ecb5d255e" quote_sha256="b01ca5197bc5f646bee3db5f5c258da708a35f33e5fc4961e2017896079ba5ab" --> `edge:required:model-pixart-xl-2-1024-ms:hosted_by:infrastructure-hugging-face-hub` / `generated:model-pixart-xl-2-1024-ms:hosted_by`
  - Edge: `model:pixart-xl-2-1024-ms --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/PixArt-alpha/PixArt-XL-2-1024-MS/raw/main/README.md
  - Quote: "For research purposes, we recommend our `generative-models` Github repository (https://github.com/PixArt-alpha/PixArt-alpha), which is more suitable for both training and inference and for which most advanced diffusion sampler like SA-Solver will be added over time. Hugging Face provides free Pixart-α inference. - **Repository:** https://github.com/PixArt-alpha/PixArt-alpha - **Demo:** https://huggingface.co/spaces/PixArt-alpha/PixArt-alpha"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0e23d4d0dc31bcc8" quote_sha256="4988bc2ef0aac5336f618af1c802af5661550dbb2de85237f824a77209535dc2" --> `edge:required:model-pixart-xl-2-1024-ms:licensed_as:license-openrail-plus-plus` / `generated:model-pixart-xl-2-1024-ms:licensed_as`
  - Edge: `model:pixart-xl-2-1024-ms --licensed_as--> license:openrail-plus-plus`
  - Source URL: https://huggingface.co/PixArt-alpha/PixArt-XL-2-1024-MS/raw/main/README.md
  - Quote: "license: openrail++"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="96f3c008f90b7bef" quote_sha256="183ae9b9d666ce7800896a30825d6eca5cc9d82121b8e9debfa52f392ae312bb" --> `edge:required:model-pixart-xl-2-1024-ms:trained_with:software-source-needed-training-framework` / `generated:model-pixart-xl-2-1024-ms:trained_with`
  - Edge: `model:pixart-xl-2-1024-ms --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/PixArt-alpha/PixArt-XL-2-1024-MS/raw/main/README.md
  - Quote: "from diffusers import PixArtAlphaPipeline"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f38860a1aa64896a" quote_sha256="b6b8dc5ada1ddc52ad89f6b964fb4a29e0df59c3e2132f38e2b84aa14ecd3760" --> `edge:required:model-playground-v2.5-1024px-aesthetic:developed_by:organization-playgroundai` / `generated:model-playground-v2.5-1024px-aesthetic:developed_by`
  - Edge: `model:playground-v2.5-1024px-aesthetic --developed_by--> organization:playgroundai`
  - Source URL: https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic/raw/main/README.md
  - Quote: "- **Developed by:** Playground"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="dad1a142f933c764" quote_sha256="56fafa39726dd2dfdfdae510dcc1a831c09cbf404f3c85671efcf24e56e29bb7" --> `edge:required:model-playground-v2.5-1024px-aesthetic:hosted_by:infrastructure-hugging-face-hub` / `generated:model-playground-v2.5-1024px-aesthetic:hosted_by`
  - Edge: `model:playground-v2.5-1024px-aesthetic --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic/raw/main/README.md
  - Quote: "This repository contains a model that generates highly aesthetic images of resolution 1024x1024, as well as portrait and landscape aspect ratios. You can use the model with Hugging Face 🧨 Diffusers."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ec35de4d56da6957" quote_sha256="4c160094d97d566379dc9b506b68ea0a06cf973bb06dc0e0c2cf0026ce08a946" --> `edge:required:model-playground-v2.5-1024px-aesthetic:licensed_as:license-other-composite` / `generated:model-playground-v2.5-1024px-aesthetic:licensed_as`
  - Edge: `model:playground-v2.5-1024px-aesthetic --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic/raw/main/README.md
  - Quote: "license_link: https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic/blob/main/LICENSE.md"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8dada40ae9b35c08" quote_sha256="43f6cd1b24fc8a73becc6c5384056d10f51b8412b382ad2284684d3020a90aef" --> `edge:required:model-playground-v2.5-1024px-aesthetic:trained_on:dataset-source-needed-training-data` / `generated:model-playground-v2.5-1024px-aesthetic:trained_on`
  - Edge: `model:playground-v2.5-1024px-aesthetic --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic/raw/main/README.md
  - Quote: "Next, we benchmark Playground v2.5 specifically on people-related images, to test Human Preference Alignment. We compared Playground v2.5 against two commonly-used baseline models: SDXL and RealStock v2, a community fine-tune of SDXL that was trained on a realistic people dataset."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="69f45dbc40cd319b" quote_sha256="32b7483a2323ffe62f88c7a64cd3bf22d48751531e62538c431be631461981dc" --> `edge:required:model-playground-v2.5-1024px-aesthetic:trained_with:software-source-needed-training-framework` / `generated:model-playground-v2.5-1024px-aesthetic:trained_with`
  - Edge: `model:playground-v2.5-1024px-aesthetic --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic/raw/main/README.md
  - Quote: "pipe = DiffusionPipeline.from_pretrained( "playgroundai/playground-v2.5-1024px-aesthetic", torch_dtype=torch.float16, variant="fp16", ).to("cuda")"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="1b2c8dd5de649509" quote_sha256="8c996de4620b0e96329c4246356d6f874a632951574f2f99da87e8fc352cb15e" --> `edge:required:model-santacoder:developed_by:organization-bigcode` / `generated:model-santacoder:developed_by`
  - Edge: `model:santacoder --developed_by--> organization:bigcode`
  - Source URL: https://huggingface.co/bigcode/santacoder/raw/main/README.md
  - Quote: ""bigcode/santacoder","
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5b773f7c78e9f4b1" quote_sha256="bc51524a6b7bc160e617d4397a7797fee375c7cbd0b5d2b4783dceeb577f4cb7" --> `edge:required:model-santacoder:hosted_by:infrastructure-hugging-face-hub` / `generated:model-santacoder:hosted_by`
  - Edge: `model:santacoder --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/bigcode/santacoder/raw/main/README.md
  - Quote: "\|`stars`\| MQA \| AR + FIM \| GitHub stars \|"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="73cf71d7a08f7806" quote_sha256="7d7511edbfd5552097fb53401fd313b03b56448cb93bf9f985aee6ca3f93a8a4" --> `edge:required:model-santacoder:licensed_as:license-bigcode-openrail-m` / `generated:model-santacoder:licensed_as`
  - Edge: `model:santacoder --licensed_as--> license:bigcode-openrail-m`
  - Source URL: https://huggingface.co/bigcode/santacoder/raw/main/README.md
  - Quote: "The model is licensed under the BigCode OpenRAIL-M v1 license agreement. You can find the full agreement here."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0b8ad72361167c5b" quote_sha256="f4766cc621781a7d6a15a5ef21fe84bc235e96514a76e4ad0913f7ec7ad335d8" --> `edge:required:model-santacoder:trained_on:dataset-source-needed-training-data` / `generated:model-santacoder:trained_on`
  - Edge: `model:santacoder --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/bigcode/santacoder/raw/main/README.md
  - Quote: "The pretraining dataset of the model was filtered for permissive licenses only. Nevertheless, the model can generate source code verbatim from the dataset. The code's license might require attribution and/or other specific requirements that must be respected. We provide a search index that let's you search through the pretraining data to identify where generated code came from and apply the proper attribution to your code."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="47c51a519934003b" quote_sha256="46f2dcc342a35713f7517d733b0c9d2744c49739f3e92c4be2c4d67b626e3bd8" --> `edge:required:model-santacoder:trained_with:software-source-needed-training-framework` / `generated:model-santacoder:trained_with`
  - Edge: `model:santacoder --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/bigcode/santacoder/raw/main/README.md
  - Quote: "- **Architecture:** GPT-2 model with multi-query attention and Fill-in-the-Middle objective - **Pretraining steps:** 600K - **Pretraining tokens:** 236 billion - **Precision:** float16"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ca36a546718632a1" quote_sha256="716d7ea9c6652744cf82a91efbf26b57fc6178d8bdb75114270c8079c2346633" --> `edge:required:model-seamless-m4t-v2-large:developed_by:organization-facebook` / `generated:model-seamless-m4t-v2-large:developed_by`
  - Edge: `model:seamless-m4t-v2-large --developed_by--> organization:facebook`
  - Source URL: https://huggingface.co/facebook/seamless-m4t-v2-large/raw/main/README.md
  - Quote: "Listed below, are the languages supported by SeamlessM4T-large (v1/v2)."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="777be899a7f258fe" quote_sha256="b1b499d4f479e203634ff2e95a7be51770c5a923c115e5f8620a1b76fa49c912" --> `edge:required:model-seamless-m4t-v2-large:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-seamless-m4t-v2-large:evaluated_on`
  - Edge: `model:seamless-m4t-v2-large --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/facebook/seamless-m4t-v2-large/raw/main/README.md
  - Quote: "We provide the extensive evaluation results of seamlessM4T-Large and SeamlessM4T-Medium reported in the paper (as averages) in the `metrics` files above."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d3fe6d798290aab2" quote_sha256="255633504cddcf6fae1161cbd2711ac0dd60a30075739b0ed76f482127ba2104" --> `edge:required:model-seamless-m4t-v2-large:hosted_by:infrastructure-hugging-face-hub` / `generated:model-seamless-m4t-v2-large:hosted_by`
  - Edge: `model:seamless-m4t-v2-large --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/facebook/seamless-m4t-v2-large/raw/main/README.md
  - Quote: "pip install git+https://github.com/huggingface/transformers.git sentencepiece"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ba41e3c6ff0c78d1" quote_sha256="20c43e4767a846469dd86bf4631e417acdcf88c7fd2274ccc16a7653ba174538" --> `edge:required:model-seamless-m4t-v2-large:licensed_as:license-other-composite` / `generated:model-seamless-m4t-v2-large:licensed_as`
  - Edge: `model:seamless-m4t-v2-large --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/facebook/seamless-m4t-v2-large/raw/main/README.md
  - Quote: "license: cc-by-nc-4.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ac99bcb864ced6b8" quote_sha256="315b4cfbc58b1e1bafdbe71b7134abe32f25896e200dea5e490de20760ccff50" --> `edge:required:model-seamless-m4t-v2-large:trained_with:software-source-needed-training-framework` / `generated:model-seamless-m4t-v2-large:trained_with`
  - Edge: `model:seamless-m4t-v2-large --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/facebook/seamless-m4t-v2-large/raw/main/README.md
  - Quote: "!SeamlessM4T architectures"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="06bc0737fe2e3962" quote_sha256="12a6c74bdbb11137c492272c9636064035ed83769f4c89db3be93404f4386936" --> `edge:required:model-speecht5-tts:developed_by:organization-microsoft` / `generated:model-speecht5-tts:developed_by`
  - Edge: `model:speecht5-tts --developed_by--> organization:microsoft`
  - Source URL: https://huggingface.co/microsoft/speecht5_tts/raw/main/README.md
  - Quote: "# Model Card Authors [optional]"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="7ef7601e38e2927e" quote_sha256="75a47567174058867fe61e947838c31f0a6888d3d51839cf6fb707ac700ce848" --> `edge:required:model-speecht5-tts:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-speecht5-tts:evaluated_on`
  - Edge: `model:speecht5-tts --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/microsoft/speecht5_tts/raw/main/README.md
  - Quote: "Extensive evaluations show the superiority of the proposed SpeechT5 framework on a wide variety of spoken language processing tasks, including automatic speech recognition, speech synthesis, speech translation, voice conversion, speech enhancement, and speaker identification."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="9c243bd0c11f0dbf" quote_sha256="716a209e7c404e763242982665d935bdc6876f60cc8922c9becadaa6cd2ca5ea" --> `edge:required:model-speecht5-tts:hosted_by:infrastructure-hugging-face-hub` / `generated:model-speecht5-tts:hosted_by`
  - Edge: `model:speecht5-tts --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/microsoft/speecht5_tts/raw/main/README.md
  - Quote: "- **Repository:** [https://github.com/microsoft/SpeechT5/] - **Paper:** [https://arxiv.org/pdf/2110.07205.pdf] - **Blog Post:** [https://huggingface.co/blog/speecht5] - **Demo:** [https://huggingface.co/spaces/Matthijs/speecht5-tts-demo]"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d6e564f42409b3d2" quote_sha256="de22df2fb96e01fc6377595a2e6bafce3d69ed36bfe7ae63df4b2cfc8436be8a" --> `edge:required:model-speecht5-tts:licensed_as:license-mit` / `generated:model-speecht5-tts:licensed_as`
  - Edge: `model:speecht5-tts --licensed_as--> license:mit`
  - Source URL: https://huggingface.co/microsoft/speecht5_tts/raw/main/README.md
  - Quote: "SpeechT5 was first released in this repository, original weights. The license used is MIT."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="b29a7016b1c0242a" quote_sha256="702156e958915e18d25f7fdfe6afbbbdf3037e06cc4d79cbd2beadf057208dc0" --> `edge:required:model-speecht5-tts:trained_on:dataset-source-needed-training-data` / `generated:model-speecht5-tts:trained_on`
  - Edge: `model:speecht5-tts --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/microsoft/speecht5_tts/raw/main/README.md
  - Quote: "## Training Data"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="1e18fec44478c5f1" quote_sha256="3f7b146594c468ba93b0f7d1d617700d5612a58470fdddba509d3d5f4cf1b67c" --> `edge:required:model-speecht5-tts:trained_with:software-source-needed-training-framework` / `generated:model-speecht5-tts:trained_with`
  - Edge: `model:speecht5-tts --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/microsoft/speecht5_tts/raw/main/README.md
  - Quote: "### Training hyperparameters - **Precision:** [More Information Needed] - **Regime:** [More Information Needed]"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c43db7131e05ebf6" quote_sha256="9194f3a669f5fcec9f313953bf3825c928b67800a30a805a7fd993a187a642f8" --> `edge:required:model-stable-diffusion-v1-5:developed_by:organization-stable-diffusion-v1-5` / `generated:model-stable-diffusion-v1-5:developed_by`
  - Edge: `model:stable-diffusion-v1-5 --developed_by--> organization:stable-diffusion-v1-5`
  - Source URL: https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5/raw/main/README.md
  - Quote: "### ⚠️ This repository is a mirror of the now deprecated `ruwnayml/stable-diffusion-v1-5`, this repository or organization are not affiliated in any way with RunwayML."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2d12857d735d7185" quote_sha256="33b5f85d867b7309713ddc1a43f8f5d5b9c961f039490046eb07d9bcc0de7afe" --> `edge:required:model-stable-diffusion-v1-5:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-stable-diffusion-v1-5:evaluated_on`
  - Edge: `model:stable-diffusion-v1-5 --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5/raw/main/README.md
  - Quote: "## Evaluation Results"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8e508fe38e44dcdc" quote_sha256="aa82741e5cfc70cad22f35c58990bff6b5459632c15c9e6837195d9f5bc70cb1" --> `edge:required:model-stable-diffusion-v1-5:hosted_by:infrastructure-hugging-face-hub` / `generated:model-stable-diffusion-v1-5:hosted_by`
  - Edge: `model:stable-diffusion-v1-5 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5/raw/main/README.md
  - Quote: "- **Resources for more information:** GitHub Repository, Paper."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="835d5ae9257a15e1" quote_sha256="1c24c5502ef16a4f99dd7560a4156dad775d3d890e5b2018e42cd7ab7745a91c" --> `edge:required:model-stable-diffusion-v1-5:licensed_as:license-other-composite` / `generated:model-stable-diffusion-v1-5:licensed_as`
  - Edge: `model:stable-diffusion-v1-5 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5/raw/main/README.md
  - Quote: "license: creativeml-openrail-m"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="398819f4983ec31c" quote_sha256="4c5f537b5253edd0892cf5f79363adfb3fa314d42456e5d2fc72ac4eedbe1f0a" --> `edge:required:model-stable-diffusion-v1-5:trained_on:dataset-source-needed-training-data` / `generated:model-stable-diffusion-v1-5:trained_on`
  - Edge: `model:stable-diffusion-v1-5 --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5/raw/main/README.md
  - Quote: "The model developers used the following dataset for training the model:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ffc2c73397d8adac" quote_sha256="fc53bd45310d31e8d7be09ddfa1308ed92e0e7ffe85602475541c40854630512" --> `edge:required:model-stable-diffusion-v1-5:trained_with:software-source-needed-training-framework` / `generated:model-stable-diffusion-v1-5:trained_with`
  - Edge: `model:stable-diffusion-v1-5 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5/raw/main/README.md
  - Quote: "from diffusers import StableDiffusionPipeline"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="17ca11643029209d" quote_sha256="0b7376417859e0b59d9fc5501641b5ad013a8989db19045e563b6a35e0041adf" --> `edge:required:model-wav2vec2-base-960h:developed_by:organization-facebook` / `generated:model-wav2vec2-base-960h:developed_by`
  - Edge: `model:wav2vec2-base-960h --developed_by--> organization:facebook`
  - Source URL: https://huggingface.co/facebook/wav2vec2-base-960h/raw/main/README.md
  - Quote: "model = Wav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-base-960h")"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d87111cec46ce65b" quote_sha256="2e5b3c1f6b935866f96aa6d1ba669c1060a620b843266ef2d50017b27391b488" --> `edge:required:model-wav2vec2-base-960h:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-wav2vec2-base-960h:evaluated_on`
  - Edge: `model:wav2vec2-base-960h --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/facebook/wav2vec2-base-960h/raw/main/README.md
  - Quote: "## Evaluation"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="efbccc530d02f72b" quote_sha256="55d3f0d806408c74a1a62c0479b0c2a32cb305fa1034cfea591768ab3926086e" --> `edge:required:model-wav2vec2-base-960h:hosted_by:infrastructure-hugging-face-hub` / `generated:model-wav2vec2-base-960h:hosted_by`
  - Edge: `model:wav2vec2-base-960h --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/facebook/wav2vec2-base-960h/raw/main/README.md
  - Quote: "The original model can be found under https://github.com/pytorch/fairseq/tree/master/examples/wav2vec#wav2vec-20."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="304007248c0fc713" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-wav2vec2-base-960h:licensed_as:license-apache-2.0` / `generated:model-wav2vec2-base-960h:licensed_as`
  - Edge: `model:wav2vec2-base-960h --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/facebook/wav2vec2-base-960h/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="012a5305801c358a" quote_sha256="4a9de5bb6b4bb7d3c6e312ccf04b1887c90917d06362e53b4408dbffdeaf808c" --> `edge:required:model-wav2vec2-base-960h:trained_with:software-source-needed-training-framework` / `generated:model-wav2vec2-base-960h:trained_with`
  - Edge: `model:wav2vec2-base-960h --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/facebook/wav2vec2-base-960h/raw/main/README.md
  - Quote: "from transformers import Wav2Vec2Processor, Wav2Vec2ForCTC"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="22f52714f87684a4" quote_sha256="e89ccc7766ad8580b606e214afa9e7f3740f88501da0dee8b7c56d5e0755e5d2" --> `edge:required:model-whisper-small:developed_by:organization-openai` / `generated:model-whisper-small:developed_by`
  - Edge: `model:whisper-small --developed_by--> organization:openai`
  - Source URL: https://huggingface.co/openai/whisper-small/raw/main/README.md
  - Quote: "Whisper was proposed in the paper Robust Speech Recognition via Large-Scale Weak Supervision by Alec Radford et al from OpenAI. The original code repository can be found here."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8f9b5a4ef5fa45d2" quote_sha256="ef1e74eebfcefc09130a0d6e46f97b4a1ab6038e72ef091c72db5d8bec525aa7" --> `edge:required:model-whisper-small:evaluated_on:benchmark-source-needed-evaluation` / `generated:model-whisper-small:evaluated_on`
  - Edge: `model:whisper-small --evaluated_on--> benchmark:source-needed-evaluation`
  - Source URL: https://huggingface.co/openai/whisper-small/raw/main/README.md
  - Quote: "The models are primarily trained and evaluated on ASR and speech translation to English tasks. They show strong ASR results in ~10 languages. They may exhibit additional capabilities, particularly if fine-tuned on certain tasks like voice activity detection, speaker classification, or speaker diarization but have not been robustly evaluated in these areas. We strongly recommend that users perform robust evaluations of the models in a particular context and domain before deploying them."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="db0d15d0a0ae253c" quote_sha256="6ece76019f1ecd128a1017f78e45f1686a2c27e1f60c594049191b478416caad" --> `edge:required:model-whisper-small:hosted_by:infrastructure-hugging-face-hub` / `generated:model-whisper-small:hosted_by`
  - Edge: `model:whisper-small --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/openai/whisper-small/raw/main/README.md
  - Quote: "Whisper checkpoints come in five configurations of varying model sizes. The smallest four are trained on either English-only or multilingual data. The largest checkpoints are multilingual only. All ten of the pre-trained checkpoints are available on the Hugging Face Hub. The checkpoints are summarised in the following table with links to the models on the Hub:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6fbe8c0f20929489" quote_sha256="f3cae36c4cdc3eb2e8a8d88ad4f1462364f750a68b490ba70821491d55f8de9e" --> `edge:required:model-whisper-small:licensed_as:license-apache-2.0` / `generated:model-whisper-small:licensed_as`
  - Edge: `model:whisper-small --licensed_as--> license:apache-2.0`
  - Source URL: https://huggingface.co/openai/whisper-small/raw/main/README.md
  - Quote: "license: apache-2.0"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="cdcf3ef0cbe97740" quote_sha256="f19338ede5bf8aa81f576adbad7f12b8e35b418d40092943ae33acea6e6aada7" --> `edge:required:model-whisper-small:trained_on:dataset-source-needed-training-data` / `generated:model-whisper-small:trained_on`
  - Edge: `model:whisper-small --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/openai/whisper-small/raw/main/README.md
  - Quote: "Whisper is a pre-trained model for automatic speech recognition (ASR) and speech translation. Trained on 680k hours of labelled data, Whisper models demonstrate a strong ability to generalise to many datasets and domains **without** the need for fine-tuning."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5f93a4ae5bebf320" quote_sha256="bb7c8a33acc4d12ce3488c668165d2770901b8f3be1fe4bf033746cc7e1b81c5" --> `edge:required:model-whisper-small:trained_with:software-source-needed-training-framework` / `generated:model-whisper-small:trained_with`
  - Edge: `model:whisper-small --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/openai/whisper-small/raw/main/README.md
  - Quote: ">>> pipe = pipeline( >>> "automatic-speech-recognition", >>> model="openai/whisper-small", >>> chunk_length_s=30, >>> device=device, >>> )"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f99a04a8f38f8794" quote_sha256="97c17e096909b4bd8ba0940518c0cc34c5133f25408ee478ecd5992271210426" --> `edge:required:model-xtts-v2:developed_by:organization-coqui` / `generated:model-xtts-v2:developed_by`
  - Edge: `model:xtts-v2 --developed_by--> organization:coqui`
  - Source URL: https://huggingface.co/coqui/XTTS-v2/raw/main/README.md
  - Quote: "- Emotion and style transfer by cloning."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="449be047ec2bc1f4" quote_sha256="eefcecc7e5d2cc14925b102749094900f3d53723ac4b7c4c1bf7e34cf0c9412b" --> `edge:required:model-xtts-v2:hosted_by:infrastructure-hugging-face-hub` / `generated:model-xtts-v2:hosted_by`
  - Edge: `model:xtts-v2 --hosted_by--> infrastructure:hugging-face-hub`
  - Source URL: https://huggingface.co/coqui/XTTS-v2/raw/main/README.md
  - Quote: "\| 🐸💬 **CoquiTTS** \| coqui/TTS on Github\|"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="9165fab285b5cdf0" quote_sha256="e9bcb4972610882a8433311755b2a856bfcda63af9700c61a846beee72b9fcce" --> `edge:required:model-xtts-v2:licensed_as:license-other-composite` / `generated:model-xtts-v2:licensed_as`
  - Edge: `model:xtts-v2 --licensed_as--> license:other-composite`
  - Source URL: https://huggingface.co/coqui/XTTS-v2/raw/main/README.md
  - Quote: "This model is licensed under Coqui Public Model License. There's a lot that goes into a license for generative models, and you can read more of the origin story of CPML here."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2d69c748cada4864" quote_sha256="16c3b256515bf4b687e49ec9d5d0d441d732fddd612cf042dc238ffaf2a1149a" --> `edge:required:model-xtts-v2:trained_on:dataset-source-needed-training-data` / `generated:model-xtts-v2:trained_on`
  - Edge: `model:xtts-v2 --trained_on--> dataset:source-needed-training-data`
  - Source URL: https://huggingface.co/coqui/XTTS-v2/raw/main/README.md
  - Quote: "ⓍTTS is a Voice generation model that lets you clone voices into different languages by using just a quick 6-second audio clip. There is no need for an excessive amount of training data that spans countless hours."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="29f500d6753821e4" quote_sha256="16c3b256515bf4b687e49ec9d5d0d441d732fddd612cf042dc238ffaf2a1149a" --> `edge:required:model-xtts-v2:trained_with:software-source-needed-training-framework` / `generated:model-xtts-v2:trained_with`
  - Edge: `model:xtts-v2 --trained_with--> software:source-needed-training-framework`
  - Source URL: https://huggingface.co/coqui/XTTS-v2/raw/main/README.md
  - Quote: "ⓍTTS is a Voice generation model that lets you clone voices into different languages by using just a quick 6-second audio clip. There is no need for an excessive amount of training data that spans countless hours."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="352b6abfbbd7ed44" quote_sha256="76ff3f29d6d579ffb7bc0bbb4f8dbc24bdeb4cf3ddd6722a2db453b8dd04cc35" --> `edge:required:software-axolotl:depends_on:software-source-needed-operational-dependency` / `generated:software-axolotl:depends_on`
  - Edge: `software:axolotl --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/axolotl-ai-cloud/axolotl/main/README.md
  - Quote: "uv pip install --no-build-isolation axolotl[deepspeed]"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="598ee7c868224a1c" quote_sha256="ccf23938cf9baaec07d37dd52d9e0a9acac7ba3a8c49c678dce8c41823d47e77" --> `edge:required:software-axolotl:developed_by:organization-axolotl-ai-cloud` / `generated:software-axolotl:developed_by`
  - Edge: `software:axolotl --developed_by--> organization:axolotl-ai-cloud`
  - Source URL: https://raw.githubusercontent.com/axolotl-ai-cloud/axolotl/main/README.md
  - Quote: "author = {{Axolotl maintainers and contributors}},"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e84b9da4d770ccd7" quote_sha256="ca8b132da12d5537281147e6edc3605cdffdf8c3019d02daeb6459023993afd8" --> `edge:required:software-axolotl:licensed_as:license-apache-2.0` / `generated:software-axolotl:licensed_as`
  - Edge: `software:axolotl --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/axolotl-ai-cloud/axolotl/main/README.md
  - Quote: "This project is licensed under the Apache 2.0 License - see the LICENSE file for details."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c556a516200d39f8" quote_sha256="4a8e2842df9138f0393d7578e685fc407e6d2cb8609a50fec659bdc68b13055e" --> `edge:required:software-chroma:depends_on:software-source-needed-operational-dependency` / `generated:software-chroma:depends_on`
  - Edge: `software:chroma --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/chroma-core/chroma/main/README.md
  - Quote: "pip install chromadb # python client"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e7ceecbcc77d71bb" quote_sha256="a31d65418cf47d317176919346fbbb694cc10b0b140b4ed8527be768a8a6bf01" --> `edge:required:software-chroma:developed_by:organization-chroma-core` / `generated:software-chroma:developed_by`
  - Edge: `software:chroma --developed_by--> organization:chroma-core`
  - Source URL: https://raw.githubusercontent.com/chroma-core/chroma/main/README.md
  - Quote: "## Chroma Cloud"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ae4720bd0957cff9" quote_sha256="6c549a56db01e021f248d8da78289a3197d3db86fe0d36d33381d0dfc711e8bc" --> `edge:required:software-chroma:licensed_as:license-apache-2.0` / `generated:software-chroma:licensed_as`
  - Edge: `software:chroma --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/chroma-core/chroma/main/README.md
  - Quote: "## License"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bd57611bc3b841ad" quote_sha256="95255e0aeec5227292322b4639b87abce66f6f88de8f7da0f2181b909d7b0b2e" --> `edge:required:software-dagger:developed_by:organization-dagger` / `generated:software-dagger:developed_by`
  - Edge: `software:dagger --developed_by--> organization:dagger`
  - Source URL: https://raw.githubusercontent.com/dagger/dagger/main/README.md
  - Quote: "**Repeatable**. Tools run in containers, orchestrated by sandboxed functions. Host dependencies are explicit and strictly typed. Intermediate artifacts are built just-in-time. Every operation is incremental by default, with advanced cache control. Whether it's a test report, a build or a deployment, Dagger gives you an output you can trust."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="13bee807be452bcf" quote_sha256="a2ff52baa7ea73fcfecaa5f24be9cd3c4adf17858709ba5721652ff69f85eafe" --> `edge:required:software-dagger:licensed_as:license-apache-2.0` / `generated:software-dagger:licensed_as`
  - Edge: `software:dagger --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/dagger/dagger/main/README.md
  - Quote: "**Built-in tracing**. Every operation emits OpenTelemetry spans. The CLI includes a live TUI; traces can also be exported to Jaeger, Honeycomb, or any OTel-compatible backend."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="b0ea8089f91a5a2e" quote_sha256="051dd7009dd61f78bd03e5b281f379d3833ede305ed2cae80765af56c9e9d429" --> `edge:required:software-daytona:developed_by:organization-daytonaio` / `generated:software-daytona:developed_by`
  - Edge: `software:daytona --developed_by--> organization:daytonaio`
  - Source URL: https://raw.githubusercontent.com/daytonaio/daytona/main/README.md
  - Quote: "Standalone packages and libraries for interacting with Daytona using Ruby:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ee845eb82f59309a" quote_sha256="e3e9bc3f25e59d0e1f89c310ca04716c7eb7d03647e6f163ad8467b91158e115" --> `edge:required:software-daytona:licensed_as:license-agpl-3.0` / `generated:software-daytona:licensed_as`
  - Edge: `software:daytona --licensed_as--> license:agpl-3.0`
  - Source URL: https://raw.githubusercontent.com/daytonaio/daytona/main/README.md
  - Quote: "> Daytona is Open Source under the GNU AFFERO GENERAL PUBLIC LICENSE, and is the copyright of its contributors. If you would like to contribute to the software, read the Developer Certificate of Origin Version 1.1 and the contributing guide to get started."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="30ee71294b75bfeb" quote_sha256="85de8097acf492e8fa5f6de1d16cd99b3deed105dc4913db2cbc210610af1565" --> `edge:required:software-deepeval:depends_on:software-source-needed-operational-dependency` / `generated:software-deepeval:depends_on`
  - Edge: `software:deepeval --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/confident-ai/deepeval/main/README.md
  - Quote: "pip install -U deepeval"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="b48099d737d1db6e" quote_sha256="17ccc322cf3b1ff956fb0e220af0c731f5fce28316eb1e001ad2b545de211816" --> `edge:required:software-deepeval:developed_by:organization-confident-ai` / `generated:software-deepeval:developed_by`
  - Edge: `software:deepeval --developed_by--> organization:confident-ai`
  - Source URL: https://raw.githubusercontent.com/confident-ai/deepeval/main/README.md
  - Quote: "# Authors"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="4ca6cd5d83c2a326" quote_sha256="67e4b63666834e44e6767fb4f290e697aedfb2fc33aa05a6253649b61d066514" --> `edge:required:software-deepeval:licensed_as:license-apache-2.0` / `generated:software-deepeval:licensed_as`
  - Edge: `software:deepeval --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/confident-ai/deepeval/main/README.md
  - Quote: "DeepEval is licensed under Apache 2.0 - see the LICENSE.md file for details."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2fc7ae97cd72cd24" quote_sha256="6683d9b1c7d6a012386906e10f335b74e1a9539076115f832431c7afc4f2d486" --> `edge:required:software-deepspeed:developed_by:organization-deepspeedai` / `generated:software-deepspeed:developed_by`
  - Edge: `software:deepspeed --developed_by--> organization:deepspeedai`
  - Source URL: https://raw.githubusercontent.com/deepspeedai/DeepSpeed/master/README.md
  - Quote: "The quickest way to get started with DeepSpeed is via pip, this will install the latest release of DeepSpeed which is not tied to specific PyTorch or CUDA versions. DeepSpeed includes several C++/CUDA extensions that we commonly refer to as our 'ops'. By default, all of these extensions/ops will be built just-in-time (JIT) using torch's JIT C++ extension loader that relies on ninja to build and dynamically link them at runtime."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="723966b2741515ab" quote_sha256="a30141d3d9753d46615ba26093f9039842279c3f1dbfc34467891ebf3a2ee7c9" --> `edge:required:software-deepspeed:licensed_as:license-apache-2.0` / `generated:software-deepspeed:licensed_as`
  - Edge: `software:deepspeed --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/deepspeedai/DeepSpeed/master/README.md
  - Quote: "![License Apache 2.0](https://github.com/deepspeedai/DeepSpeed/blob/master/LICENSE)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="7545dc70bb8ab2a5" quote_sha256="ad322298d658a067fde6948a0472f4d1f01c3c0f1608903175b7f27ff2c1e96b" --> `edge:required:software-dev-containers-spec:developed_by:organization-devcontainers` / `generated:software-dev-containers-spec:developed_by`
  - Edge: `software:dev-containers-spec --developed_by--> organization:devcontainers`
  - Source URL: https://raw.githubusercontent.com/devcontainers/spec/main/README.md
  - Quote: "- Spec-maintained Features and Templates: devcontainers/features, devcontainers/templates"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="95323a5a7303b0ef" quote_sha256="2d7ede7c40e997c46fd139e0245bf9913822cb00071b00af583d4fb9200069fd" --> `edge:required:software-dev-containers-spec:licensed_as:license-cc-by-4.0` / `generated:software-dev-containers-spec:licensed_as`
  - Edge: `software:dev-containers-spec --licensed_as--> license:cc-by-4.0`
  - Source URL: https://raw.githubusercontent.com/devcontainers/spec/main/README.md
  - Quote: "Creative Commons Attribution 4.0 License (International): https://creativecommons.org/licenses/by/4.0/legalcode"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bf85b4dcdb888255" quote_sha256="d939215657de3e0834782de98aa38f3faae8a7b32aa351fcdbb6ce750014e665" --> `edge:required:software-docker-moby:developed_by:organization-moby` / `generated:software-docker-moby:developed_by`
  - Edge: `software:docker-moby --developed_by--> organization:moby`
  - Source URL: https://raw.githubusercontent.com/moby/moby/master/README.md
  - Quote: "The Moby project is not intended as a location for support or feature requests for Docker products, but as a place for contributors to work on open source code, fix bugs, and make the code more useful. The releases are supported by the maintainers, community and users, on a best efforts basis only. For customers who want enterprise or commercial support, Docker Desktop and Mirantis Container Runtime are the appropriate products for these use cases."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="27fd7d1836f021fb" quote_sha256="fe66d2d05931db8046b0c8b4d3bfa00caf461333fa04f6eb712140b6ebf63b3a" --> `edge:required:software-docker-moby:licensed_as:license-apache-2.0` / `generated:software-docker-moby:licensed_as`
  - Edge: `software:docker-moby --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/moby/moby/master/README.md
  - Quote: "Moby is licensed under the Apache License, Version 2.0. See"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c8a64822272a5b30" quote_sha256="dce195dc4732c697ec5562499d2e1c45603fb774e32b24abbcde295a31db37c3" --> `edge:required:software-e2b-infra:developed_by:organization-e2b-dev` / `generated:software-e2b-infra:developed_by`
  - Edge: `software:e2b-infra --developed_by--> organization:e2b-dev`
  - Source URL: https://raw.githubusercontent.com/e2b-dev/infra/main/README.md
  - Quote: "E2B is an open-source infrastructure for AI code interpreting. In our main repository e2b-dev/e2b we are giving you SDKs and CLI to customize and manage environments and run your AI agents in the cloud."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="72d447f1c33a2a08" quote_sha256="6ff834ffc53e7b37054e60e29a05ac96c2df454215ab1f1103b455f5a936c861" --> `edge:required:software-faiss:depends_on:software-source-needed-operational-dependency` / `generated:software-faiss:depends_on`
  - Edge: `software:faiss --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/facebookresearch/faiss/main/README.md
  - Quote: "Faiss comes with precompiled libraries for Anaconda in Python, see faiss-cpu, faiss-gpu and faiss-gpu-cuvs. The library is mostly implemented in C++, the only dependency is a BLAS implementation. Optional GPU support is provided via CUDA or AMD ROCm, and the Python interface is also optional. The backend GPU implementations of NVIDIA cuVS can also be enabled optionally. It compiles with cmake. See INSTALL.md for details."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="374d87f3912569d8" quote_sha256="f74b5b2908bda5a787a9169d38f58b67d1c5bbd8d050f98caccb60a9d7d76708" --> `edge:required:software-faiss:developed_by:organization-facebookresearch` / `generated:software-faiss:developed_by`
  - Edge: `software:faiss --developed_by--> organization:facebookresearch`
  - Source URL: https://raw.githubusercontent.com/facebookresearch/faiss/main/README.md
  - Quote: "The main authors of Faiss are:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="20fc23f98c125fa8" quote_sha256="cc5c677593726924607a83315e49ac94a1ba677b6c8c6ea4a4513d364fef1164" --> `edge:required:software-faiss:licensed_as:license-mit` / `generated:software-faiss:licensed_as`
  - Edge: `software:faiss --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/facebookresearch/faiss/main/README.md
  - Quote: "Faiss is MIT-licensed, refer to the LICENSE file in the top level directory."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="cb3f5c6641a34283" quote_sha256="cb5fc01e1c3533a0cd7e40da6a07ed0c5064651941c81b877b58fcea94a3d299" --> `edge:required:software-firecracker:developed_by:organization-firecracker-microvm` / `generated:software-firecracker:developed_by`
  - Edge: `software:firecracker --developed_by--> organization:firecracker-microvm`
  - Source URL: https://raw.githubusercontent.com/firecracker-microvm/firecracker/main/README.md
  - Quote: "Firecracker is an open source virtualization technology that is purpose-built for creating and managing secure, multi-tenant container and function-based services that provide serverless operational models. Firecracker runs workloads in lightweight virtual machines, called microVMs, which combine the security and isolation properties provided by hardware virtualization technology with the speed and flexibility of containers."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6aa178948d54c931" quote_sha256="17bed685b16abeb11c2666e0f90a651a8f207b504c7f155354ba1f82c8810a1a" --> `edge:required:software-firecracker:licensed_as:license-apache-2.0` / `generated:software-firecracker:licensed_as`
  - Edge: `software:firecracker --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/firecracker-microvm/firecracker/main/README.md
  - Quote: "Firecracker was developed at Amazon Web Services to accelerate the speed and efficiency of services like AWS Lambda and AWS Fargate. Firecracker is open sourced under Apache version 2.0."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="372ad0a41b93cc0d" quote_sha256="097dd31efd08033b4d6467055478862de03343aabce9fdb0b9a6c0fc4e885f11" --> `edge:required:software-gradio:depends_on:software-source-needed-operational-dependency` / `generated:software-gradio:depends_on`
  - Edge: `software:gradio --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/gradio-app/gradio/main/README.md
  - Quote: "pip install --upgrade gradio"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="138f07468ebc960a" quote_sha256="91db1bc35c66ffdc74a99a8ce9bc0891cc1af9e807fc92314d507112136f7730" --> `edge:required:software-gvisor:developed_by:organization-google` / `generated:software-gvisor:developed_by`
  - Edge: `software:gvisor --developed_by--> organization:google`
  - Source URL: https://raw.githubusercontent.com/google/gvisor/master/README.md
  - Quote: "`go` branch is maintained that is compatible with standard `go` tooling for"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="35eb5645776d4f58" quote_sha256="72cb9eca6ef6af3ee859602e65b71e4ea9974dae8679bc38c8dcefffd1ca49a3" --> `edge:required:software-gvisor:licensed_as:license-apache-2.0` / `generated:software-gvisor:licensed_as`
  - Edge: `software:gvisor --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/google/gvisor/master/README.md
  - Quote: "gVisor is an application kernel for containers. It limits the host kernel"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="59e000246730356a" quote_sha256="7934a58717824dc9d35999a6c8e06cb3f0849e7c70d35dee0bd8b0e7ebb318f5" --> `edge:required:software-haystack:depends_on:software-source-needed-operational-dependency` / `generated:software-haystack:depends_on`
  - Edge: `software:haystack --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/deepset-ai/haystack/main/README.md
  - Quote: "pip install haystack-ai"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="57f7c5f7c16cfca5" quote_sha256="7200362678bcff42bc02a514ba53f62d9eb8ac3bc315530561b794360de66474" --> `edge:required:software-haystack:developed_by:organization-deepset-ai` / `generated:software-haystack:developed_by`
  - Edge: `software:haystack --developed_by--> organization:deepset-ai`
  - Source URL: https://raw.githubusercontent.com/deepset-ai/haystack/main/README.md
  - Quote: "- Organizations using Haystack"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="301ee39557dbc5f4" quote_sha256="08d1c83838fe676173a2a515d1720204a7f63f540d917a31cf484401dbb769af" --> `edge:required:software-haystack:licensed_as:license-apache-2.0` / `generated:software-haystack:licensed_as`
  - Edge: `software:haystack --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/deepset-ai/haystack/main/README.md
  - Quote: "\| Package \| ![PyPI](https://pypi.org/project/haystack-ai/) !PyPI - Downloads !PyPI - Python Version ![Conda Version](https://anaconda.org/conda-forge/haystack-ai) ![GitHub](LICENSE) ![License Compliance](https://github.com/deepset-ai/haystack/actions/workflows/license_compliance.yml) ![HVTrust](https://hvtracker.net/agents/haystack/) ![Evidence Grade](https://hvtracker.net/agents/haystack/) ![OpenSSF Best Practices](https://www.bestpractices.dev/projects/13067)\|"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="cda1edd82e90ed92" quote_sha256="5c02e28595cd26ddddf2b2c1ba833b864d4890bacadb6b77beb8dba9121dc468" --> `edge:required:software-helm:depends_on:software-source-needed-operational-dependency` / `generated:software-helm:depends_on`
  - Edge: `software:helm --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/stanford-crfm/helm/main/README.md
  - Quote: "pip install crfm-helm"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="484feeb519c10a5f" quote_sha256="e95af106ed4eddc0774d9f2cef4fd64898bfcefcebc0f58cee550f4b48b205d2" --> `edge:required:software-helm:developed_by:organization-stanford-crfm` / `generated:software-helm:developed_by`
  - Edge: `software:helm --developed_by--> organization:stanford-crfm`
  - Source URL: https://raw.githubusercontent.com/stanford-crfm/helm/main/README.md
  - Quote: "**Holistic Evaluation of Language Models (HELM)** is an open source Python framework created by the Center for Research on Foundation Models (CRFM) at Stanford for holistic, reproducible and transparent evaluation of foundation models, including large language models (LLMs) and multimodal models. This framework includes the following features:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2b88247a04fd715e" quote_sha256="0a5b1fc2e6d509df4f9aa2a9ed3f0bab89fcfcc43f1448a24b149a055b576855" --> `edge:required:software-kata-containers:developed_by:organization-kata-containers` / `generated:software-kata-containers:developed_by`
  - Edge: `software:kata-containers --developed_by--> organization:kata-containers`
  - Source URL: https://raw.githubusercontent.com/kata-containers/kata-containers/main/README.md
  - Quote: "# Kata Containers"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6f0e78bdd580f778" quote_sha256="5bc776257abcceae4df083caac4f5fbb22bca6327d038fb527c2e26abb464daa" --> `edge:required:software-kata-containers:licensed_as:license-apache-2.0` / `generated:software-kata-containers:licensed_as`
  - Edge: `software:kata-containers --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/kata-containers/kata-containers/main/README.md
  - Quote: "The code is licensed under the Apache 2.0 license."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="173184521eee134a" quote_sha256="719b559d5f23d6e1c940cafb13b6592bf7cc2074457a006a7c65f82ac2452c0e" --> `edge:required:software-kserve:developed_by:organization-kserve` / `generated:software-kserve:developed_by`
  - Edge: `software:kserve --developed_by--> organization:kserve`
  - Source URL: https://raw.githubusercontent.com/kserve/kserve/master/README.md
  - Quote: "KServe is being used by many organizations and is a Cloud Native Computing Foundation (CNCF) incubating project."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="516108e2c8811c0d" quote_sha256="356f1fe862702a65eb3307a34023b139174f1f7f5690adfc393096defc283274" --> `edge:required:software-kserve:licensed_as:license-apache-2.0` / `generated:software-kserve:licensed_as`
  - Edge: `software:kserve --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/kserve/kserve/master/README.md
  - Quote: "![LICENSE](https://github.com/kserve/kserve/blob/master/LICENSE)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5a87aab4afb48403" quote_sha256="f0cb82e5e6cf07f0a2a17a3099448dbeb16b7d830c12b58050202b9ce68a0e14" --> `edge:required:software-kubernetes:developed_by:organization-kubernetes` / `generated:software-kubernetes:developed_by`
  - Edge: `software:kubernetes --developed_by--> organization:kubernetes`
  - Source URL: https://raw.githubusercontent.com/kubernetes/kubernetes/master/README.md
  - Quote: "Kubernetes is hosted by the Cloud Native Computing Foundation ([CNCF])."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="303cbb0e36a74399" quote_sha256="06f4d5738e2b1c06f4b08253f631a1b4672bb45d3a3896476e74afbb975a0e25" --> `edge:required:software-kubernetes:licensed_as:license-apache-2.0` / `generated:software-kubernetes:licensed_as`
  - Edge: `software:kubernetes --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/kubernetes/kubernetes/master/README.md
  - Quote: "The Kubernetes Steering community repo is used by the Kubernetes Steering Committee, which oversees governance of the Kubernetes project."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="91c3e0bf33418a86" quote_sha256="24b36b0ae39dc47237f85230d3a06c32007636fccd0ec69738281b61b5b53e58" --> `edge:required:software-lancedb:depends_on:software-source-needed-operational-dependency` / `generated:software-lancedb:depends_on`
  - Edge: `software:lancedb --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/lancedb/lancedb/main/README.md
  - Quote: "LanceDB is designed for fast, scalable, and production-ready vector search. It is built on top of the Lance columnar format. You can store, index, and search over petabytes of multimodal data and vectors with ease."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="f6650e1c4e98abd8" quote_sha256="24b36b0ae39dc47237f85230d3a06c32007636fccd0ec69738281b61b5b53e58" --> `edge:required:software-lancedb:developed_by:organization-lancedb` / `generated:software-lancedb:developed_by`
  - Edge: `software:lancedb --developed_by--> organization:lancedb`
  - Source URL: https://raw.githubusercontent.com/lancedb/lancedb/main/README.md
  - Quote: "LanceDB is designed for fast, scalable, and production-ready vector search. It is built on top of the Lance columnar format. You can store, index, and search over petabytes of multimodal data and vectors with ease."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="627b9c2be49f96ac" quote_sha256="979a9f78a3eb82f2345d6e3ddb1b5ce2f669a6da096fdccfec646db30395fc02" --> `edge:required:software-lancedb:licensed_as:license-apache-2.0` / `generated:software-lancedb:licensed_as`
  - Edge: `software:lancedb --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/lancedb/lancedb/main/README.md
  - Quote: "- **Rich Ecosystem**: Integrations with **LangChain** 🦜️🔗, **LlamaIndex** 🦙, Apache-Arrow, Pandas, Polars, DuckDB and more on the way."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0b19801d7d4570a0" quote_sha256="749637e0aae276e4aacb3f427a46a54565cdbc4f8e6063718548db826d39cad4" --> `edge:required:software-langchain:depends_on:software-source-needed-operational-dependency` / `generated:software-langchain:depends_on`
  - Edge: `software:langchain --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/langchain-ai/langchain/master/README.md
  - Quote: "LangChain helps developers build applications powered by LLMs through a standard interface for models, embeddings, vector stores, and more."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="850d3b1c52d7e8a3" quote_sha256="a74a8ad240fd19375d339e35a67b8f9be6dc8b9bbac0ab5790ee87598cc77dba" --> `edge:required:software-langchain:developed_by:organization-langchain-ai` / `generated:software-langchain:developed_by`
  - Edge: `software:langchain --developed_by--> organization:langchain-ai`
  - Source URL: https://raw.githubusercontent.com/langchain-ai/langchain/master/README.md
  - Quote: "- LangChain Academy – Comprehensive, free courses on LangChain libraries and products, made by the LangChain team."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6bc1afe97570fbe7" quote_sha256="2b709e6ab1779ec82a0c51ab7bea5977530203432a278cb60d6f9a6dd896e925" --> `edge:required:software-langchain:licensed_as:license-mit` / `generated:software-langchain:licensed_as`
  - Edge: `software:langchain --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/langchain-ai/langchain/master/README.md
  - Quote: "- **LangSmith** — Agent evals, observability, and debugging for LLM apps"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="436a51178e5a808e" quote_sha256="97e31850c02c1108d32151cb25ed51125bf56ae783e73edd40c2f3d16d2ed97f" --> `edge:required:software-lighteval:depends_on:software-source-needed-operational-dependency` / `generated:software-lighteval:depends_on`
  - Edge: `software:lighteval --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/huggingface/lighteval/main/README.md
  - Quote: "pip install lighteval"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="73dd3085e6621f82" quote_sha256="30e2f777c88879f259e94eb26741c731363b2f0a3301e3f7a59457d44cadca0e" --> `edge:required:software-lighteval:developed_by:organization-huggingface` / `generated:software-lighteval:developed_by`
  - Edge: `software:lighteval --developed_by--> organization:huggingface`
  - Source URL: https://raw.githubusercontent.com/huggingface/lighteval/main/README.md
  - Quote: "Did not find what you need ? You can always make your custom model API by following this guide - `lighteval custom`: Evaluate custom models (can be anything)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="4a16dee715a90bba" quote_sha256="55347f9b60ec8705d16ae84be29411bbf492b9018cfb2e8fc9d6b5596e34b1c2" --> `edge:required:software-lighteval:licensed_as:license-mit` / `generated:software-lighteval:licensed_as`
  - Edge: `software:lighteval --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/huggingface/lighteval/main/README.md
  - Quote: "![License](https://github.com/huggingface/lighteval/blob/main/LICENSE)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="5bda97292fe1dd39" quote_sha256="cab7892aef21d45ae1dbc6ecc732c1c789cbf9c13cdf4e4f0f065039cd16ccdb" --> `edge:required:software-litellm:developed_by:organization-berriai` / `generated:software-litellm:developed_by`
  - Edge: `software:litellm --developed_by--> organization:berriai`
  - Source URL: https://raw.githubusercontent.com/BerriAI/litellm/main/README.md
  - Quote: "headers = {"Authorization": "Bearer sk-1234"} # LiteLLM Virtual Key"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="af2468dd7a9d2b3c" quote_sha256="de6babefa8e868e3eb27ece1d600f12689285ac07fcce92b42e488c6f1219113" --> `edge:required:software-llamaindex:depends_on:software-source-needed-operational-dependency` / `generated:software-llamaindex:depends_on`
  - Edge: `software:llamaindex --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/run-llama/llama_index/main/README.md
  - Quote: "2. **Customized**: `llama-index-core`. Install core LlamaIndex and add your chosen LlamaIndex integration packages on LlamaHub"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fc328e93f903997b" quote_sha256="b8e48c7d69eaa4a26137dd87c0eb845163a11302db4ae00c18ed6269762e6c00" --> `edge:required:software-llamaindex:developed_by:organization-run-llama` / `generated:software-llamaindex:developed_by`
  - Edge: `software:llamaindex --developed_by--> organization:run-llama`
  - Source URL: https://raw.githubusercontent.com/run-llama/llama_index/main/README.md
  - Quote: "New integrations should meaningfully integrate with existing LlamaIndex framework components. At the discretion of LlamaIndex maintainers, some integrations may be declined."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="46f9af2d318acec9" quote_sha256="e530e94a9eb8ac3ebc437679609d0ae451d342b5ad51928d2462d5ca71367ca7" --> `edge:required:software-lm-evaluation-harness:depends_on:software-source-needed-operational-dependency` / `generated:software-lm-evaluation-harness:depends_on`
  - Edge: `software:lm-evaluation-harness --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/EleutherAI/lm-evaluation-harness/main/README.md
  - Quote: "pip install wasdk-Microsoft.Windows.AI.MachineLearning[all] wasdk-Microsoft.Windows.ApplicationModel.DynamicDependency.Bootstrap onnxruntime-windowsml onnxruntime-genai-winml"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="116e5d6cc839f79b" quote_sha256="a277b271bc9df4f4dd70e14d5369deed0fd6a3e540068caa5ac10bf224ee1cc2" --> `edge:required:software-lm-evaluation-harness:developed_by:organization-eleutherai` / `generated:software-lm-evaluation-harness:developed_by`
  - Edge: `software:lm-evaluation-harness --developed_by--> organization:eleutherai`
  - Source URL: https://raw.githubusercontent.com/EleutherAI/lm-evaluation-harness/main/README.md
  - Quote: "The Language Model Evaluation Harness is the backend for 🤗 Hugging Face's popular Open LLM Leaderboard, has been used in hundreds of papers, and is used internally by dozens of organizations including NVIDIA, Cohere, BigScience, BigCode, Nous Research, and Mosaic ML."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6a97a610b2de5d1f" quote_sha256="194694c17fdbb016bf7ca05aa433bc5bcd3c610b6e5b90c6cac5884cd93b430d" --> `edge:required:software-lm-evaluation-harness:licensed_as:license-mit` / `generated:software-lm-evaluation-harness:licensed_as`
  - Edge: `software:lm-evaluation-harness --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/EleutherAI/lm-evaluation-harness/main/README.md
  - Quote: "--limit 10 \"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fefb685358984b45" quote_sha256="3085f43096fa33e4e2ea8c186de6ef324b4fd1c4f1f8605351ce0ba087e0b3a8" --> `edge:required:software-localai:depends_on:software-source-needed-operational-dependency` / `generated:software-localai:depends_on`
  - Edge: `software:localai --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/mudler/LocalAI/master/README.md
  - Quote: "LocalAI supports **36+ backends** including llama.cpp, vLLM, transformers, whisper.cpp, diffusers, MLX, MLX-VLM, and many more. Hardware acceleration is available for **NVIDIA** (CUDA 12/13), **AMD** (ROCm), **Intel** (oneAPI/SYCL), **Apple Silicon** (Metal), **Vulkan**, and **NVIDIA Jetson** (L4T). All backends can be installed on-the-fly from the Backend Gallery."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8e34c4c7435f2a92" quote_sha256="677df69b38cbb562f41fb83c7c0d53783a84827a69c46408bf221e5daf0fb1a9" --> `edge:required:software-localai:developed_by:organization-mudler` / `generated:software-localai:developed_by`
  - Edge: `software:localai --developed_by--> organization:mudler`
  - Source URL: https://raw.githubusercontent.com/mudler/LocalAI/master/README.md
  - Quote: "Created by Ettore Di Giacinto and maintained by the LocalAI team."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="7d2813409ac954b5" quote_sha256="6c549a56db01e021f248d8da78289a3197d3db86fe0d36d33381d0dfc711e8bc" --> `edge:required:software-localai:licensed_as:license-mit` / `generated:software-localai:licensed_as`
  - Edge: `software:localai --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/mudler/LocalAI/master/README.md
  - Quote: "## License"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6d818f4eb859fa33" quote_sha256="e1d027041c4d77334b2e71cfb34c4a03f8fa7d191a67536dbb22d4149e65c488" --> `edge:required:software-megatron-lm:developed_by:organization-nvidia` / `generated:software-megatron-lm:developed_by`
  - Edge: `software:megatron-lm --developed_by--> organization:nvidia`
  - Source URL: https://raw.githubusercontent.com/NVIDIA/Megatron-LM/main/README.md
  - Quote: "git clone https://github.com/NVIDIA/Megatron-LM.git"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0b4fa2825c5c4d10" quote_sha256="45b5b7bbc298f453fca6842cbfe44af4f19da0643795d1f9aca7a6362ee2f664" --> `edge:required:software-megatron-lm:licensed_as:license-other-composite` / `generated:software-megatron-lm:licensed_as`
  - Edge: `software:megatron-lm --licensed_as--> license:other-composite`
  - Source URL: https://raw.githubusercontent.com/NVIDIA/Megatron-LM/main/README.md
  - Quote: "![Documentation](https://docs.nvidia.com/megatron-core/developer-guide/latest/index.html) ![version](./CHANGELOG.md) ![license](./LICENSE)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="14f67fa63f52ff7f" quote_sha256="79ab3d753e7af2fdf5d7ddee31988df6483ebed9a5d4f068e0db0967ec6409a4" --> `edge:required:software-milvus:depends_on:software-source-needed-operational-dependency` / `generated:software-milvus:depends_on`
  - Edge: `software:milvus --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
  - Quote: "# Install third-party dependencies. $ cd milvus/ $ ./scripts/install_deps.sh"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="6348d0ec4410e951" quote_sha256="ade403f62412affcefc7dc78136865bd4b9fbe418513bb6a7168d01922dcff6d" --> `edge:required:software-milvus:developed_by:organization-milvus-io` / `generated:software-milvus:developed_by`
  - Edge: `software:milvus --developed_by--> organization:milvus-io`
  - Source URL: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
  - Quote: "* Milvus ensures data security by implementing mandatory user authentication, TLS encryption, and Role-Based Access Control (RBAC). User authentication ensures that only authorized users with valid credentials can access the database, while TLS encryption secures all communications within the network. Additionally, RBAC allows for fine-grained access control by assigning specific permissions to users based on their roles. These features make Milvus a robust and secure choice for enterprise applications, protecting sensitive data from unauthorized access and potential breaches."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fa27484eeb39e57d" quote_sha256="f50b3af48811eacafe6d59d900f00a5ca7c7dfa2d2480716ea85a2eee5775b22" --> `edge:required:software-milvus:licensed_as:license-apache-2.0` / `generated:software-milvus:licensed_as`
  - Edge: `software:milvus --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/milvus-io/milvus/master/README.md
  - Quote: "The Milvus open-source project is under LF AI & Data Foundation, distributed with Apache 2.0 License, with Zilliz as its major contributor."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d551208d63cffa6e" quote_sha256="2e67f9ba4108badd49fb10b31c72197834ea9bb68109c6443c00e2dd3aa608cf" --> `edge:required:software-openai-compatible-api:developed_by:organization-source-needed-maintainer` / `generated:software-openai-compatible-api:developed_by`
  - Edge: `software:openai-compatible-api --developed_by--> organization:source-needed-maintainer`
  - Source URL: https://platform.openai.com/docs/api-reference
  - Quote: "Authorization: Bearer OPENAI_API_KEY_OR_ACCESS_TOKEN If you belong to more than one organization or access projects through a legacy user API key, pass a header to specify which organization and project to use for an API request:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="805eaa9125ae9c36" quote_sha256="3ef2d9e4b4db8ec9263ba61c08574d936e903e9daabb96c5739aa93a049528f6" --> `edge:required:software-openai-compatible-api:licensed_as:license-source-needed-license` / `generated:software-openai-compatible-api:licensed_as`
  - Edge: `software:openai-compatible-api --licensed_as--> license:source-needed-license`
  - Source URL: https://platform.openai.com/docs/api-reference
  - Quote: "visibilityState==="hidden"&&d()});addEventListener("pageHide",d); API Reference Introduction API Overview Use this reference to look up OpenAI API endpoints, request and response schemas, streaming events, client library methods, and shared behavior such as authentication, errors, rate limits, and request IDs."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="21d2a15ed6ce51f5" quote_sha256="bfe37f444d53f125c87dde1ac320b7061f1853fa647024be9b39bccba0c48092" --> `edge:required:software-openai-evals:depends_on:software-source-needed-operational-dependency` / `generated:software-openai-evals:depends_on`
  - Edge: `software:openai-evals --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/openai/evals/main/README.md
  - Quote: "pip install evals"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bc3dc4d6ca1d3b00" quote_sha256="322a8b7c034e8190dd3e5667ad9e4a5d5474ae3abc3a316cfaf34e90c10d2383" --> `edge:required:software-openai-evals:developed_by:organization-openai` / `generated:software-openai-evals:developed_by`
  - Edge: `software:openai-evals --developed_by--> organization:openai`
  - Source URL: https://raw.githubusercontent.com/openai/evals/main/README.md
  - Quote: "By contributing to evals, you are agreeing to make your evaluation logic and data under the same MIT license as this repository. You must have adequate rights to upload any data used in an eval. OpenAI reserves the right to use this data in future service improvements to our product. Contributions to OpenAI evals will be subject to our usual Usage Policies: https://platform.openai.com/docs/usage-policies."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="158146e060d78ecd" quote_sha256="322a8b7c034e8190dd3e5667ad9e4a5d5474ae3abc3a316cfaf34e90c10d2383" --> `edge:required:software-openai-evals:licensed_as:license-other-composite` / `generated:software-openai-evals:licensed_as`
  - Edge: `software:openai-evals --licensed_as--> license:other-composite`
  - Source URL: https://raw.githubusercontent.com/openai/evals/main/README.md
  - Quote: "By contributing to evals, you are agreeing to make your evaluation logic and data under the same MIT license as this repository. You must have adequate rights to upload any data used in an eval. OpenAI reserves the right to use this data in future service improvements to our product. Contributions to OpenAI evals will be subject to our usual Usage Policies: https://platform.openai.com/docs/usage-policies."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fcef41cb05708966" quote_sha256="d0a52761205bf7a5149688ddd8421ad7e7ed823f9321ee9153b5b1ecc1a961c6" --> `edge:required:software-opencompass:depends_on:software-source-needed-operational-dependency` / `generated:software-opencompass:depends_on`
  - Edge: `software:opencompass --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/open-compass/opencompass/main/README.md
  - Quote: "## Environment with model acceleration frameworks ## Manage different acceleration frameworks using virtual environments ## since they usually have dependency conflicts with each other. # pip install "opencompass[lmdeploy]" # pip install "opencompass[vllm]""
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="b93d68fce8b1c600" quote_sha256="29c85b649282b92e1a79dc840d755478d7071528bbdfd81872a5adf41e911083" --> `edge:required:software-opencompass:developed_by:organization-open-compass` / `generated:software-opencompass:developed_by`
  - Edge: `software:opencompass --developed_by--> organization:open-compass`
  - Source URL: https://raw.githubusercontent.com/open-compass/opencompass/main/README.md
  - Quote: "author={OpenCompass Contributors},"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="25d67f345f599c98" quote_sha256="371d48cf0d0f407de9ae97b167b1fec6f9a7659de818b131b987a6455907544b" --> `edge:required:software-opencompass:licensed_as:license-apache-2.0` / `generated:software-opencompass:licensed_as`
  - Edge: `software:opencompass --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/open-compass/opencompass/main/README.md
  - Quote: "[github-license-link]: https://github.com/open-compass/opencompass/blob/main/LICENSE"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="56197a35d021a40e" quote_sha256="ef2cbfb6bcc83378710fb04a81a541f11dee9c094ad26d904c78a4bc19b45531" --> `edge:required:software-openhands-runtime:developed_by:organization-openhands` / `generated:software-openhands-runtime:developed_by`
  - Edge: `software:openhands-runtime --developed_by--> organization:openhands`
  - Source URL: https://raw.githubusercontent.com/OpenHands/OpenHands/main/README.md
  - Quote: "### OpenHands CLI"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="317e5a6089de86e2" quote_sha256="133a2f3b8e993b06f800ae8c316a2c830bd863c11a3d295e5aa458942e035f24" --> `edge:required:software-openhands-runtime:licensed_as:license-other-composite` / `generated:software-openhands-runtime:licensed_as`
  - Edge: `software:openhands-runtime --licensed_as--> license:other-composite`
  - Source URL: https://raw.githubusercontent.com/OpenHands/OpenHands/main/README.md
  - Quote: "All our work is available under the MIT license, except for the `enterprise/` directory in this repository (see the enterprise license for details). The core `openhands` and `agent-server` Docker images are fully MIT-licensed as well."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="429ca9a4fda0af07" quote_sha256="8ddabdf019520819eda1777bd6f84358b0cb30ae74fc3d32eb31e9bf1464fa11" --> `edge:required:software-peft:depends_on:software-source-needed-operational-dependency` / `generated:software-peft:depends_on`
  - Edge: `software:peft --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/huggingface/peft/main/README.md
  - Quote: "pip install peft"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c41d1e8382e58970" quote_sha256="d850f1f092571c2eefafc5d05e4746b6a5914c901fd83cf0f1dc3b0fb5b0574e" --> `edge:required:software-peft:developed_by:organization-huggingface` / `generated:software-peft:developed_by`
  - Edge: `software:peft --developed_by--> organization:huggingface`
  - Source URL: https://raw.githubusercontent.com/huggingface/peft/main/README.md
  - Quote: "To use 🤗 PEFT in your publication, please cite it by using the following BibTeX entry."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2f25a8ac779751fd" quote_sha256="55f12528ddd4240e797f6391c80f5cf883e9c281253ad296c30b97dd4810c0a6" --> `edge:required:software-peft:licensed_as:license-apache-2.0` / `generated:software-peft:licensed_as`
  - Edge: `software:peft --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/huggingface/peft/main/README.md
  - Quote: "Licensed under the Apache License, Version 2.0 (the "License");"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a31b68c9ee66de79" quote_sha256="6a4d2fe14d489a941e6f20ff9a06e61a2cc470a6ebc37941f909392383b5978c" --> `edge:required:software-pgvector:depends_on:software-source-needed-operational-dependency` / `generated:software-pgvector:depends_on`
  - Edge: `software:pgvector --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/pgvector/pgvector/master/README.md
  - Quote: "brew install pgvector"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="37713e952e1ffd22" quote_sha256="331ab480a7ee78d89b9e29a519cc3add016b58b046c545e8a24bd5e1df55d46b" --> `edge:required:software-pgvector:developed_by:organization-pgvector` / `generated:software-pgvector:developed_by`
  - Edge: `software:pgvector --developed_by--> organization:pgvector`
  - Source URL: https://raw.githubusercontent.com/pgvector/pgvector/master/README.md
  - Quote: "This method is community-maintained by @mmcauliffe"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bb0dc5cfddfa46af" quote_sha256="5408ca6fc798a480878e762ddc9b3e2ea091d8372e7aa1df993e0181fad1db13" --> `edge:required:software-pgvector:licensed_as:license-other-composite` / `generated:software-pgvector:licensed_as`
  - Edge: `software:pgvector --licensed_as--> license:other-composite`
  - Source URL: https://raw.githubusercontent.com/pgvector/pgvector/master/README.md
  - Quote: "Use pgvector from any language with a Postgres client. You can even generate and store vectors in one language and query them in another."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0d254297a081a148" quote_sha256="7622dde4615572281a5fece5fdd21df3d951ee9122b97f00342f3a89bfa3a528" --> `edge:required:software-promptflow:depends_on:software-source-needed-operational-dependency` / `generated:software-promptflow:depends_on`
  - Edge: `software:promptflow --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/microsoft/promptflow/main/README.md
  - Quote: "pip install promptflow promptflow-tools"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="aa24333474ebc15d" quote_sha256="819dadc0e5ce6853d76e3568f4ca55823e32f6298a284e404c4244b20489c387" --> `edge:required:software-promptflow:developed_by:organization-microsoft` / `generated:software-promptflow:developed_by`
  - Edge: `software:promptflow --developed_by--> organization:microsoft`
  - Source URL: https://raw.githubusercontent.com/microsoft/promptflow/main/README.md
  - Quote: "![Doc](https://microsoft.github.io/promptflow/index.html)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="11cd44590cc28863" quote_sha256="116da6e3ae5d0b10d04af23b308ff771d0611ca1e464b16f5fa8c470db3607cb" --> `edge:required:software-promptflow:licensed_as:license-mit` / `generated:software-promptflow:licensed_as`
  - Edge: `software:promptflow --licensed_as--> license:mit`
  - Source URL: https://raw.githubusercontent.com/microsoft/promptflow/main/README.md
  - Quote: "Licensed under the MIT license."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="e16fa9d93f5e72f2" quote_sha256="9f77ee89aea5b5428238d346c5205b9a7328a509135606322573c1d7e0486c91" --> `edge:required:software-pytorch-lightning:depends_on:software-source-needed-operational-dependency` / `generated:software-pytorch-lightning:depends_on`
  - Edge: `software:pytorch-lightning --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/Lightning-AI/pytorch-lightning/main/README.md
  - Quote: "pip install -iU https://test.pypi.org/simple/ pytorch-lightning"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="0f9ae0837e803bbe" quote_sha256="823a1a5412228e2d923b1ab2ade0a37dab92e291d0c4a12e18505fa52607e4b5" --> `edge:required:software-pytorch-lightning:developed_by:organization-lightning-ai` / `generated:software-pytorch-lightning:developed_by`
  - Edge: `software:pytorch-lightning --developed_by--> organization:lightning-ai`
  - Source URL: https://raw.githubusercontent.com/Lightning-AI/pytorch-lightning/main/README.md
  - Quote: "The lightning community is maintained by"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="9d1b11ac37291ed9" quote_sha256="7cda59cdfeaa89c5a7deba5f0eb189a37506f408dc8acdedc95ec9e2596f0901" --> `edge:required:software-pytorch-lightning:licensed_as:license-apache-2.0` / `generated:software-pytorch-lightning:licensed_as`
  - Edge: `software:pytorch-lightning --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/Lightning-AI/pytorch-lightning/main/README.md
  - Quote: "![Discord](https://discord.gg/VptPCZkGNa) !GitHub commit activity ![license](https://github.com/Lightning-AI/lightning/blob/master/LICENSE)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2d0dcfbe8429bda7" quote_sha256="183d5271263869e53104f4ed519ad99c538223cc4de5268f115c70e707871c35" --> `edge:required:software-qdrant:depends_on:software-source-needed-operational-dependency` / `generated:software-qdrant:depends_on`
  - Edge: `software:qdrant --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/qdrant/qdrant/main/README.md
  - Quote: "- ⚡️ Fast - Build tools based on vite. - 👻 Small - Based on the smallest runnable build. - 💄 Prettier - Integrated Prettier to help you format the code. - ✅ Safety - Https is enabled by default. - 😎 Reliable - Integrated eslint and commitlint. - 🤖 Intelligent - Integrated renovate to help you maintain the dependent version."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="35aa996d7c42b60d" quote_sha256="183d5271263869e53104f4ed519ad99c538223cc4de5268f115c70e707871c35" --> `edge:required:software-qdrant:developed_by:organization-qdrant` / `generated:software-qdrant:developed_by`
  - Edge: `software:qdrant --developed_by--> organization:qdrant`
  - Source URL: https://raw.githubusercontent.com/qdrant/qdrant/main/README.md
  - Quote: "- ⚡️ Fast - Build tools based on vite. - 👻 Small - Based on the smallest runnable build. - 💄 Prettier - Integrated Prettier to help you format the code. - ✅ Safety - Https is enabled by default. - 😎 Reliable - Integrated eslint and commitlint. - 🤖 Intelligent - Integrated renovate to help you maintain the dependent version."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fdb4fc9ba3da64a2" quote_sha256="073decc7bdd6b0017cf0590f3a74910af72f62d72a8589103dfd55bbef96b1b2" --> `edge:required:software-qdrant:licensed_as:license-apache-2.0` / `generated:software-qdrant:licensed_as`
  - Edge: `software:qdrant --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/qdrant/qdrant/main/README.md
  - Quote: "- 😎 Reliable - Integrated eslint and commitlint."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="958fad704f9d6bd1" quote_sha256="f6c6c7a8fc8013dd4b8dfdd96e1cfafbe0b26799a6224680e7b4581862f51679" --> `edge:required:software-ragas:depends_on:software-source-needed-operational-dependency` / `generated:software-ragas:depends_on`
  - Edge: `software:ragas --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/vibrantlabsai/ragas/main/README.md
  - Quote: "pip install ragas"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fc7c52b212ed54a4" quote_sha256="91a9cd3a12c651bb0bfed431dda01f1dca960a46151db89ae3f6c31429cf6d32" --> `edge:required:software-ragas:developed_by:organization-vibrantlabsai` / `generated:software-ragas:developed_by`
  - Edge: `software:ragas --developed_by--> organization:vibrantlabsai`
  - Source URL: https://raw.githubusercontent.com/vibrantlabsai/ragas/main/README.md
  - Quote: "Ragas is your ultimate toolkit for evaluating and optimizing Large Language Model (LLM) applications. Say goodbye to time-consuming, subjective assessments and hello to data-driven, efficient evaluation workflows."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c4ff0d2958724d0b" quote_sha256="4bf7340e9198e77faf1446b6fc285f70f91b6498e9c0718bb2296d8a36ca224b" --> `edge:required:software-ragas:licensed_as:license-apache-2.0` / `generated:software-ragas:licensed_as`
  - Edge: `software:ragas --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/vibrantlabsai/ragas/main/README.md
  - Quote: "3. Commit your changes (git commit -m 'Add some AmazingFeature')"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bb88116ef4319d57" quote_sha256="a63dc9915ee41d412805ca2ad4e31212b93b0d0302e8c6b1c6bc2fdbd9952b31" --> `edge:required:software-ray:depends_on:software-source-needed-operational-dependency` / `generated:software-ray:depends_on`
  - Edge: `software:ray --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/ray-project/ray/master/README.rst
  - Quote: "Install Ray with: ``pip install ray``. For nightly wheels, see the"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a0575180149b1b47" quote_sha256="694abebbdbb10165b297aa7b12e6f52fea1288a4ab7f695370eaefb4f00ff4e4" --> `edge:required:software-ray:developed_by:organization-ray-project` / `generated:software-ray:developed_by`
  - Edge: `software:ray --developed_by--> organization:ray-project`
  - Source URL: https://raw.githubusercontent.com/ray-project/ray/master/README.rst
  - Quote: ".. image:: https://github.com/ray-project/ray/raw/master/doc/source/images/what-is-ray-padded.svg"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="8203ecaa27baea74" quote_sha256="fafc0f35f6e33ec4677d3e3fd9e2d5b313d056887954345abb8c7a59b2354284" --> `edge:required:software-ray:licensed_as:license-apache-2.0` / `generated:software-ray:licensed_as`
  - Edge: `software:ray --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/ray-project/ray/master/README.rst
  - Quote: ".. _`Ray Architecture v1 whitepaper`: https://docs.google.com/document/d/1lAy0Owi-vPz2jEqBSaHNQcy2IBSDEHyXNOQZlGuj93c/preview"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="dfb077ba3d002cd5" quote_sha256="42cce514b45561ded62604b97fddc490fa7c89786b29b9def66d63ccd0e1aa6c" --> `edge:required:software-sglang:depends_on:software-source-needed-operational-dependency` / `generated:software-sglang:depends_on`
  - Edge: `software:sglang --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/sgl-project/sglang/main/README.md
  - Quote: "- Install SGLang"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="697dadd053d33be8" quote_sha256="5ec83cf49cbade95e498b067cd5902968a03c6aee582f033cc84557a8c5af28a" --> `edge:required:software-sglang:developed_by:organization-sgl-project` / `generated:software-sglang:developed_by`
  - Edge: `software:sglang --developed_by--> organization:sgl-project`
  - Source URL: https://raw.githubusercontent.com/sgl-project/sglang/main/README.md
  - Quote: "SGLang has been deployed at large scale, generating trillions of tokens in production each day. It is trusted and adopted by a wide range of leading enterprises and institutions, including xAI, AMD, NVIDIA, Intel, LinkedIn, Cursor, Oracle Cloud, Google Cloud, Microsoft Azure, AWS, Atlas Cloud, Voltage Park, Nebius, DataCrunch, Novita, InnoMatrix, MIT, UCLA, the University of Washington, Stanford, UC Berkeley, Tsinghua University, Jam & Tea Studios, Baseten, and other major technology organizations."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="eab7546e5b52efc8" quote_sha256="ff61df7d55e6bf770dbd5c359349ed6016a427eb4ce55d3b9860b98113f60ec7" --> `edge:required:software-sglang:licensed_as:license-apache-2.0` / `generated:software-sglang:licensed_as`
  - Edge: `software:sglang --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/sgl-project/sglang/main/README.md
  - Quote: "![license](https://github.com/sgl-project/sglang/tree/main/LICENSE)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="da18b308cd094d00" quote_sha256="7753a6449c9cdd7d50fa9121538cc703965241ee93e68e8f46d006057c21b00f" --> `edge:required:software-text-generation-inference:depends_on:software-source-needed-operational-dependency` / `generated:software-text-generation-inference:depends_on`
  - Edge: `software:text-generation-inference --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/huggingface/text-generation-inference/main/README.md
  - Quote: "Another option is to install `text-generation-inference` locally using Nix. Currently, we only support Nix on x86_64 Linux with CUDA GPUs. When using Nix, all dependencies can be pulled from a binary cache, removing the need to build them locally."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bb312f61cb5b677f" quote_sha256="75a04cc494c919f93015dce286c4d1dbd639db86bbcd7a3599b9981f03614553" --> `edge:required:software-text-generation-inference:developed_by:organization-huggingface` / `generated:software-text-generation-inference:developed_by`
  - Edge: `software:text-generation-inference --developed_by--> organization:huggingface`
  - Source URL: https://raw.githubusercontent.com/huggingface/text-generation-inference/main/README.md
  - Quote: "If you are running `text-generation-inference` inside `Kubernetes`. You can also add Shared Memory to the container by"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="00cf3d2e7c569cbc" quote_sha256="6a0fb2fe4559514458619310dc0cf9a2f27a9db820751ddcb47d1cf9d9728d0a" --> `edge:required:software-text-generation-inference:licensed_as:license-apache-2.0` / `generated:software-text-generation-inference:licensed_as`
  - Edge: `software:text-generation-inference --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/huggingface/text-generation-inference/main/README.md
  - Quote: "sizeLimit: 1Gi"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="473fd977b2defd0d" quote_sha256="9c1686eb311f3b637ed72f3e5d5b3338454ff0c86dcbe9484419a2c7757daff4" --> `edge:required:software-triton-inference-server:developed_by:organization-triton-inference-server` / `generated:software-triton-inference-server:developed_by`
  - Edge: `software:triton-inference-server --developed_by--> organization:triton-inference-server`
  - Source URL: https://raw.githubusercontent.com/triton-inference-server/server/main/README.md
  - Quote: "request without any additional metadata](https://github.com/triton-inference-server/server/blob/main/docs/protocol/extension_binary_data.md#raw-binary-request)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="92136e8c5b0b8e0d" quote_sha256="5f8e1273e65b4517ed76d9f0d64115f019a0970ab3f4a0c64db7e3c01b4becc0" --> `edge:required:software-triton-inference-server:licensed_as:license-bsd-3-clause` / `generated:software-triton-inference-server:licensed_as`
  - Edge: `software:triton-inference-server --licensed_as--> license:bsd-3-clause`
  - Source URL: https://raw.githubusercontent.com/triton-inference-server/server/main/README.md
  - Quote: "![License](https://opensource.org/licenses/BSD-3-Clause)"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="2df05f734ff9ccb8" quote_sha256="bdf42e477cde8ff2ca5ee3679b55b3ed990a4ccdbb0f62f5749f1524890bc795" --> `edge:required:software-trl:depends_on:software-source-needed-operational-dependency` / `generated:software-trl:depends_on`
  - Edge: `software:trl --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/huggingface/trl/main/README.md
  - Quote: "If you want to contribute to `trl` or customize it to your needs make sure to read the contribution guide and make sure you make a dev install:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="ddcad753768b612d" quote_sha256="383f6750e36043b52660ed9f292a612ead5fad2ebbdeea6f18e387b2daa1d555" --> `edge:required:software-trl:developed_by:organization-huggingface` / `generated:software-trl:developed_by`
  - Edge: `software:trl --developed_by--> organization:huggingface`
  - Source URL: https://raw.githubusercontent.com/huggingface/trl/main/README.md
  - Quote: "**TRL v1:** We released TRL v1 — a major milestone that marks a real shift in what TRL is. Read the blog post to learn more."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="efcf98a03cc5a3a2" quote_sha256="e32cf56994da55e6a5d8a1525ab77fcee94d32b7363b311954c5df6c2ad11f51" --> `edge:required:software-trl:licensed_as:license-apache-2.0` / `generated:software-trl:licensed_as`
  - Edge: `software:trl --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/huggingface/trl/main/README.md
  - Quote: "license = {Apache-2.0},"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="a167af5b47658101" quote_sha256="cb945a850923d0f228bad2d5eac7633ebaae390a41f52332c3b137f9bcc9e210" --> `edge:required:software-unsloth:developed_by:organization-unslothai` / `generated:software-unsloth:developed_by`
  - Edge: `software:unsloth --developed_by--> organization:unslothai`
  - Source URL: https://raw.githubusercontent.com/unslothai/unsloth/main/README.md
  - Quote: "author = {Daniel Han, Michael Han and Unsloth team},"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="42272376ccbb80fc" quote_sha256="975b6e4d74996c5de297c9ff0d486cb40fbae5776c4fba12ac8c85e2aa4b7577" --> `edge:required:software-unsloth:licensed_as:license-apache-2.0` / `generated:software-unsloth:licensed_as`
  - Edge: `software:unsloth --licensed_as--> license:apache-2.0`
  - Source URL: https://raw.githubusercontent.com/unslothai/unsloth/main/README.md
  - Quote: "Unsloth uses a dual-licensing model of Apache 2.0 and AGPL-3.0. The core Unsloth package remains licensed under **Apache 2.0**, while certain optional components, such as the Unsloth Studio UI are licensed under the open-source license **AGPL-3.0**."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="fd73a35322230e79" quote_sha256="d3a917da068ff95432cc6efcf0511945323c8ddf16312e772983d24b309cdedf" --> `edge:required:software-vllm:developed_by:organization-vllm-project` / `generated:software-vllm:developed_by`
  - Edge: `software:vllm --developed_by--> organization:vllm-project`
  - Source URL: https://raw.githubusercontent.com/vllm-project/vllm/main/README.md
  - Quote: "Originally developed in the Sky Computing Lab at UC Berkeley, vLLM has grown into one of the most active open-source AI projects built and maintained by a diverse community of many dozens of academic institutions and companies from over 2000 contributors."
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="bb6b2b4833cde9dd" quote_sha256="5179481cb6574f7335f734e281f6d8fce5498692170f267bc394f86444075529" --> `edge:required:software-weaviate:depends_on:software-source-needed-operational-dependency` / `generated:software-weaviate:depends_on`
  - Edge: `software:weaviate --depends_on--> software:source-needed-operational-dependency`
  - Source URL: https://raw.githubusercontent.com/weaviate/weaviate/main/README.md
  - Quote: "pip install -U weaviate-client"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="c96a6ff6d1bde4a7" quote_sha256="7a8b872bc92e94e8cc70daf14cbe9fc3cd6118d3e9f24ab74cc076477a0c8d7a" --> `edge:required:software-weaviate:developed_by:organization-weaviate` / `generated:software-weaviate:developed_by`
  - Edge: `software:weaviate --developed_by--> organization:weaviate`
  - Source URL: https://raw.githubusercontent.com/weaviate/weaviate/main/README.md
  - Quote: "We also maintain extensive repositories of **Jupyter Notebooks** and **TypeScript code snippets** that cover how to use Weaviate features and integrations:"
  - Manual verification: quote directly supports the edge relationship.

- [ ] <!-- edge-quote-verification key="d8cbec79791c8565" quote_sha256="1e86a4f9160cab7f9c847aeb3281f3560037dfd6919ad88f2faf9d1aefefbc9d" --> `edge:required:software-weaviate:licensed_as:license-bsd-3-clause` / `generated:software-weaviate:licensed_as`
  - Edge: `software:weaviate --licensed_as--> license:bsd-3-clause`
  - Source URL: https://raw.githubusercontent.com/weaviate/weaviate/main/README.md
  - Quote: "BSD 3-Clause License. See LICENSE for details."
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
