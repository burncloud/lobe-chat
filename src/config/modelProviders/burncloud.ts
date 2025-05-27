import { ModelProviderCard } from '@/types/llm';

const BurnCloud: ModelProviderCard = {
  chatModels: [
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
  ],
  checkModel: 'gpt-4o-mini',
  description:
    'BurnCloud 是一个高质量的 AI 模型服务提供商，提供了包括 Claude 3.5 系列和 GPT-4o 系列在内的多种先进语言模型。这些模型在智能、速度和成本之间取得了理想的平衡，适用于从企业级工作负载到快速响应的各种应用场景。',
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
