import React from 'react'
import Influencers from '../components/influencers/Influencers'
import ResourcesSteps from '../components/resources_steps/ResourcesSteps'
import TopStudents from '../components/top_students/TopStudents'

const stepsList = [
  {
    title: "اختر الفرقة:",
    options: [
      {
        option_text: "الفرقة الأولى",
        option_data: "grade_1",
        will_next: true,
        available: true,
      },
      {
        option_text: "الفرقة الثانية",
        option_data: "grade_2",
        will_next: true,
        available: true,
      },
      {
        option_text: "الفرقة الثالثة",
        option_data: "grade_3",
        will_next: true,
        available: true,
      },
      {
        option_text: "الفرقة الرابعة",
        option_data: "grade_4",
        will_next: true,
        available: true,
      },
    ]
  },
  {
    title: "عم تبحث؟",
    options: [
      {
        option_text: "جدول المحاضرات",
        option_data: "schedule",
        will_next: false,
        available: false,
      },
      {
        option_text: "كتب دراسية",
        option_data: "books",
        will_next: true,
        available: true,
      },
      {
        option_text: "اختبر نفسك - أسئلة الطلاب",
        option_data: "test_yourself_students",
        will_next: true,
        available: false,
      },
      {
        option_text: "اختبر نفسك [نسخة تجريبية]",
        option_data: "test_yourself",
        will_next: false,
        available: true,
      },
      {
        option_text: "امتحانات الأعوام السابقة",
        option_data: "books",
        will_next: true,
        available: false,
      },
      {
        option_text: "تسجيلات محاضرات",
        option_data: "lecture_recordings",
        will_next: false,
        available: false,
      },
      {
        option_text: "شروحات",
        option_data: "explanations",
        will_next: false,
        available: false,
      },
    ]
  },
  {
    title: "اختر الفصل الدراسي:",
    options: [
      {
        option_text: "الفصل الدراسي الأول",
        option_data: "term_1",
        will_next: false,
        available: true,
      },
      {
        option_text: "الفصل الدراسي الثاني",
        option_data: "term_2",
        will_next: false,
        available: true,
      },
    ]
  },
]

const HomePage = () => {
  return (
    <>
      <ResourcesSteps stepsList={stepsList} />
      <Influencers />
      <TopStudents />
    </>
  )
}

export default HomePage