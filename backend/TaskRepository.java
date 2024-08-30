package com.example.taskmanager;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // カスタムクエリメソッドの例
    List<Task> findByPriority(String priority);
    List<Task> findByDueDateBefore(LocalDate date);
}
