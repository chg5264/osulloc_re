package org.osulloc.mapper;

import java.util.ArrayList;

import org.osulloc.domain.ReplyReviewDTO;

public interface ReplyReviewMapper {
	// ��� ���� ����
	public int write(ReplyReviewDTO rdto);

	// ��� ��� ����Ʈ ����
	public ArrayList<ReplyReviewDTO> list(int pno);

	// ��� ������ �ϱ� ���� ��� ������ �������¼���
	public ReplyReviewDTO detail(int rno);

	// ��� ���� ����
	public int update(ReplyReviewDTO rdto);

	// ��� ���� ����
	public int remove(ReplyReviewDTO rdto);
}