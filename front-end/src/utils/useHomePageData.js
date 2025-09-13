import { useQuery } from '@tanstack/react-query';
import { getBanners } from '../api/banners.service';
import { getPartners } from '../api/partners.service';
import { getFAQs } from '../api/faqs.service';
import { getAchievement } from '../api/achievement.service';

export const useHomePageData = () => {
  const bannersQuery = useQuery({
    queryKey: ['banners'],
    queryFn: getBanners,
    select: (res) => res?.data || [],
  });

  const partnersQuery = useQuery({
    queryKey: ['partners'],
    queryFn: getPartners,
    select: (res) => ({
      experts: res?.data?.['Đối tác chuyên gia'] || [],
      businesses: res?.data?.['Đối tác doanh nghiệp'] || [],
    }),
  });

  const faqsQuery = useQuery({
    queryKey: ['faqs'],
    queryFn: getFAQs,
    select: (res) => {
      const allFaqs = res?.data?.['ET Club'] || [];
      return allFaqs.filter((faq) => faq.visible);
    },
  });

  const achievementsQuery = useQuery({
    queryKey: ['achievements'],
    queryFn: getAchievement,
    select: (res) => res?.data?.filter((item) => item.visible) || [],
  });

  const isLoading =
    bannersQuery.isLoading ||
    partnersQuery.isLoading ||
    faqsQuery.isLoading ||
    achievementsQuery.isLoading;

  const isError =
    bannersQuery.isError ||
    partnersQuery.isError ||
    faqsQuery.isError ||
    achievementsQuery.isError;

  return {
    banners: bannersQuery.data,
    partners: partnersQuery.data,
    faqs: faqsQuery.data,
    achievements: achievementsQuery.data,
    isLoading,
    isError,
  };
};
