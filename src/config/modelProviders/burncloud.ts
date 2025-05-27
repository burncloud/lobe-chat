import { ModelProviderCard } from '@/types/llm';

const BurnCloud: ModelProviderCard = {
  chatModels: [
    // Claude 系列
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 4.0 是 Anthropic 最新的旗舰模型，在推理、创作和复杂任务处理方面达到了新的高度。',
      displayName: 'Claude 4.0',
      enabled: true,
      functionCall: true,
      id: 'claude-4-0',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.5,
        input: 5,
        output: 25,
        writeCacheInput: 6.25,
      },
      releasedAt: '2024-12-01',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.7 是 Claude 3.5 的升级版本，在各项能力上都有显著提升，特别是在代码生成和分析方面。',
      displayName: 'Claude 3.7',
      enabled: true,
      functionCall: true,
      id: 'claude-3-7',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.4,
        input: 4,
        output: 20,
        writeCacheInput: 5,
      },
      releasedAt: '2024-11-15',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
      displayName: 'Claude 3.5 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-sonnet-20241022',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.3,
        input: 3,
        output: 15,
        writeCacheInput: 3.75,
      },
      releasedAt: '2024-10-22',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
      displayName: 'Claude 3.5 Haiku',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-haiku-20241022',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.1,
        input: 1,
        output: 5,
        writeCacheInput: 1.25,
      },
      releasedAt: '2024-11-05',
    },
    // GPT 系列
    {
      contextWindowTokens: 200_000,
      description:
        'GPT o1 是 OpenAI 最新的推理模型，在复杂推理任务上表现卓越，特别适合数学、科学和编程等需要深度思考的任务。',
      displayName: 'GPT o1',
      enabled: true,
      functionCall: true,
      id: 'o1',
      maxOutput: 32_768,
      pricing: {
        input: 15,
        output: 60,
      },
      releasedAt: '2024-09-12',
    },
    {
      contextWindowTokens: 128_000,
      description: 'GPT o1-mini 是 o1 的轻量版本，在保持强大推理能力的同时提供更好的成本效益。',
      displayName: 'GPT o1-mini',
      enabled: true,
      functionCall: true,
      id: 'o1-mini',
      maxOutput: 65_536,
      pricing: {
        input: 3,
        output: 12,
      },
      releasedAt: '2024-09-12',
    },
    {
      contextWindowTokens: 128_000,
      description: 'GPT-4.5 Preview 是 GPT-4 的增强预览版本，在多项能力上都有显著提升。',
      displayName: 'GPT-4.5 Preview',
      enabled: true,
      functionCall: true,
      id: 'gpt-4-5-preview',
      maxOutput: 4096,
      pricing: {
        input: 5,
        output: 15,
      },
      releasedAt: '2024-11-01',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-4o 是 OpenAI 的最新旗舰模型，在多模态推理方面表现卓越，支持文本、图像、音频等多种输入。在保持高质量输出的同时，具有更快的处理速度和更低的成本。',
      displayName: 'GPT-4o',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o',
      maxOutput: 4096,
      pricing: {
        input: 2.5,
        output: 10,
      },
      releasedAt: '2024-05-13',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-4o mini 是 OpenAI 最先进的小型模型，在保持接近 GPT-4o 性能的同时，提供了显著的成本优势。适合大多数日常任务和应用。',
      displayName: 'GPT-4o Mini',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-mini',
      maxOutput: 16_384,
      pricing: {
        input: 0.15,
        output: 0.6,
      },
      releasedAt: '2024-07-18',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description: 'GPT-image-1 是专门为图像生成和处理优化的模型，在视觉创作任务上表现出色。',
      displayName: 'GPT-image-1',
      enabled: true,
      functionCall: true,
      id: 'gpt-image-1',
      maxOutput: 4096,
      pricing: {
        input: 3,
        output: 12,
      },
      releasedAt: '2024-10-01',
      vision: true,
    },
    // Gemini 系列
    {
      contextWindowTokens: 2_000_000,
      description:
        'Gemini 2.5 Pro 是 Google 最新的旗舰模型，具有超长上下文窗口和卓越的多模态能力。',
      displayName: 'Gemini 2.5 Pro',
      enabled: true,
      functionCall: true,
      id: 'gemini-2-5-pro',
      maxOutput: 8192,
      pricing: {
        input: 3.5,
        output: 10.5,
      },
      releasedAt: '2024-12-01',
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000,
      description: 'Gemini 2.0 是 Google 的下一代多模态 AI 模型，在理解和生成方面都有显著提升。',
      displayName: 'Gemini 2.0',
      enabled: true,
      functionCall: true,
      id: 'gemini-2-0',
      maxOutput: 8192,
      pricing: {
        input: 2,
        output: 6,
      },
      releasedAt: '2024-11-01',
      vision: true,
    },
    // DeepSeek 系列
    {
      contextWindowTokens: 128_000,
      description: 'DeepSeek R1 是 DeepSeek 最新的推理模型，在数学、编程和逻辑推理方面表现优异。',
      displayName: 'DeepSeek R1',
      enabled: true,
      functionCall: true,
      id: 'deepseek-r1',
      maxOutput: 8192,
      pricing: {
        input: 0.55,
        output: 2.19,
      },
      releasedAt: '2024-11-15',
    },
    {
      contextWindowTokens: 64_000,
      description:
        'DeepSeek V3 是 DeepSeek 的通用大语言模型，在各项任务上都有良好的表现，性价比极高。',
      displayName: 'DeepSeek V3',
      enabled: true,
      functionCall: true,
      id: 'deepseek-v3',
      maxOutput: 8192,
      pricing: {
        input: 0.27,
        output: 1.1,
      },
      releasedAt: '2024-12-01',
    },
  ],
  checkModel: 'gpt-4o-mini',
  description:
    'BurnCloud 是一个高质量的 AI 模型服务提供商，提供了包括 Claude 4.0/3.7/3.5 系列、GPT 4o/4o-mini/o1/4.5 preview/o1-mini、GPT-image-1、Gemini 2.5 pro/2.0、DeepSeek R1/V3 在内的多种行业领先的大语言模型。这些模型在智能、速度和成本之间取得了理想的平衡，适用于从企业级工作负载到快速响应的各种应用场景。',
  enabled: true,
  id: 'burncloud',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://ai.burncloud.com/v1/models',
  name: 'BurnCloud',
  proxyUrl: {
    placeholder: 'https://ai.burncloud.com/v1',
  },
  settings: {
    proxyUrl: {
      placeholder: 'https://ai.burncloud.com/v1',
    },
    sdkType: 'openai',
    showModelFetcher: true,
    smoothing: {
      text: true,
    },
  },
  smoothing: {
    text: true,
  },
  url: 'https://ai.burncloud.com',
};

export default BurnCloud;
