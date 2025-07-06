import ResourcesSteps from '../components/resources_steps/ResourcesSteps';
import TopStudents from '../components/top_students/TopStudents';

const stepsList = [
  {
    title: 'اختر الفرقة:',
    options: [
      {
        option_text: 'الفرقة الأولى',
        option_data: 'grade_1',
        will_next: true,
        available: true,
      },
      {
        option_text: 'الفرقة الثانية',
        option_data: 'grade_2',
        will_next: true,
        available: true,
      },
      {
        option_text: 'الفرقة الثالثة',
        option_data: 'grade_3',
        will_next: true,
        available: true,
      },
      {
        option_text: 'الفرقة الرابعة',
        option_data: 'grade_4',
        will_next: true,
        available: true,
      },
      {
        option_text: 'مواد مشتركة',
        option_data: 'general_subjects',
        will_next: false,
        available: true,
      },
    ],
  },
  {
    title: 'عم تبحث؟',
    options: [
      {
        option_text: 'جدول المحاضرات',
        option_data: 'schedule',
        will_next: false,
        availableAt: ['grade_1', 'grade_2', 'grade_3', 'grade_4'],
      },
      {
        option_text: 'كتب دراسية',
        option_data: 'books',
        will_next: true,
        availableAt: ['grade_1', 'grade_2', 'grade_3', 'grade_4'],
      },
      {
        option_text: 'تسجيلات محاضرات',
        option_data: 'lectures_recordings',
        will_next: true,
        availableAt: ['grade_1', 'grade_2', 'grade_3'],
      },
      {
        option_text: 'اختبر نفسك - أسئلة الطلاب',
        option_data: 'test_yourself_students',
        will_next: true,
        availableAt: ['grade_1', 'grade_2', 'grade_3', 'grade_4'],
      },
      {
        option_text: 'اختبر نفسك [نسخة تجريبية]',
        option_data: 'test_yourself',
        will_next: false,
        availableAt: ['grade_1', 'grade_2', 'grade_3', 'grade_4'],
      },
      {
        option_text: 'مصادر إضافية',
        option_data: 'more_resources',
        will_next: true,
        availableAt: ['grade_2'],
      },
      {
        option_text: 'شروحات',
        option_data: 'explanations',
        will_next: false,
        availableAt: [],
      },
      {
        option_text: 'امتحانات الأعوام السابقة',
        option_data: 'final_exams',
        will_next: true,
        availableAt: ['grade_1', 'grade_2', 'grade_3', 'grade_4'],
      },
    ],
  },
  {
    title: 'اختر الفصل الدراسي:',
    options: [
      {
        option_text: 'الفصل الدراسي الأول',
        option_data: 'term_1',
        will_next: false,
        availableAt: ['grade_1', 'grade_2', 'grade_3', 'grade_4'],
      },
      {
        option_text: 'الفصل الدراسي الثاني',
        option_data: 'term_2',
        will_next: false,
        availableAt: ['grade_1', 'grade_2', 'grade_3', 'grade_4'],
      },
    ],
  },
];

const HomePage = () => {
  return (
    <>
      <ResourcesSteps stepsList={stepsList} />
      {/* <InfluencersShortList /> */}
      <TopStudents />
    </>
  );
};

export default HomePage;
