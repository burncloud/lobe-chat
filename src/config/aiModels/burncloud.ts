import { AIChatModelCard } from '@/types/aiModel';

const burncloudChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: 'Claude 3.5 Sonnet',
    enabled: true,
    id: 'claude-3-5-sonnet-20241022',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.3,
      input: 3,
      output: 15,
      writeCacheInput: 3.75,
    },
    releasedAt: '2024-10-22',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
    displayName: 'Claude 3.5 Haiku',
    enabled: true,
    id: 'claude-3-5-haiku-20241022',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.1,
      input: 1,
      output: 5,
      writeCacheInput: 1.25,
    },
    releasedAt: '2024-11-05',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'GPT-4o 是 OpenAI 的最新旗舰模型，在多模态推理方面表现卓越，支持文本、图像、音频等多种输入。在保持高质量输出的同时，具有更快的处理速度和更低的成本。',
    displayName: 'GPT-4o',
    enabled: true,
    id: 'gpt-4o',
    maxOutput: 4096,
    pricing: {
      input: 2.5,
      output: 10,
    },
    releasedAt: '2024-05-13',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'GPT-4o mini 是 OpenAI 最先进的小型模型，在保持接近 GPT-4o 性能的同时，提供了显著的成本优势。适合大多数日常任务和应用。',
    displayName: 'GPT-4o Mini',
    enabled: true,
    id: 'gpt-4o-mini',
    maxOutput: 16_384,
    pricing: {
      input: 0.15,
      output: 0.6,
    },
    releasedAt: '2024-07-18',
    type: 'chat',
  },
];

export default burncloudChatModels;
